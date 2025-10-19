# Database Setup Guide

## 🚨 UTF8MB4_0900 Collation Error Fix

### Problem
The `si_kompeten.sql` file contains **MySQL 8.0+ specific collations** that are not supported in:
- MariaDB (any version)
- MySQL 5.7 and older
- Some MySQL 8.0 configurations

**Detected collations:**
- `utf8mb4_0900_ai_ci` (MySQL 8.0.0+)
- `utf8mb4_uca1400_ai_ci` (MySQL 8.0.30+)

### Solution
Use the fixed SQL file: `si_kompeten_fixed.sql` (created automatically)

## 🔧 Manual Fix (if needed)

### Option 1: PowerShell Script
```powershell
.\fix-sql-collation.ps1 -InputFile "path\to\si_kompeten.sql"
```

### Option 2: Manual Replacement
Replace all instances of:

**UTF8MB4 0900 series (MySQL 8.0.0+):**
- `utf8mb4_0900_ai_ci` → `utf8mb4_unicode_ci`
- `utf8mb4_0900_bin` → `utf8mb4_bin`
- `utf8mb4_0900_as_ci` → `utf8mb4_unicode_ci`
- `utf8mb4_0900_as_cs` → `utf8mb4_unicode_ci`

**UTF8MB4 UCA1400 series (MySQL 8.0.30+):**
- `utf8mb4_uca1400_ai_ci` → `utf8mb4_unicode_ci`
- `utf8mb4_uca1400_bin` → `utf8mb4_bin`
- `utf8mb4_uca1400_as_ci` → `utf8mb4_unicode_ci`
- `utf8mb4_uca1400_as_cs` → `utf8mb4_unicode_ci`

### Option 3: Sed Command (Linux/Mac)
```bash
# Fix all problematic collations
sed -i 's/utf8mb4_0900_ai_ci/utf8mb4_unicode_ci/g' si_kompeten.sql
sed -i 's/utf8mb4_uca1400_ai_ci/utf8mb4_unicode_ci/g' si_kompeten.sql
sed -i 's/utf8mb4_0900_bin/utf8mb4_bin/g' si_kompeten.sql
sed -i 's/utf8mb4_uca1400_bin/utf8mb4_bin/g' si_kompeten.sql
```

## 📊 Collation Compatibility

| Collation | MySQL 5.7 | MySQL 8.0+ | MariaDB | Recommended |
|-----------|------------|-------------|---------|-------------|
| `utf8mb4_0900_ai_ci` | ❌ | ✅ | ❌ | No |
| `utf8mb4_uca1400_ai_ci` | ❌ | ✅ | ❌ | No |
| `utf8mb4_unicode_ci` | ✅ | ✅ | ✅ | **Yes** |
| `utf8mb4_general_ci` | ✅ | ✅ | ✅ | Yes (faster) |
| `utf8mb4_bin` | ✅ | ✅ | ✅ | Yes (case-sensitive) |

## 🗄️ Database Import Commands

### MySQL/MariaDB
```bash
# Create database
mysql -u root -p -e "CREATE DATABASE si_kompeten CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Import fixed SQL file
mysql -u root -p si_kompeten < si_kompeten_fixed.sql
```

### Docker MySQL
```bash
# Copy SQL file to container
docker cp si_kompeten_fixed.sql mysql_container:/tmp/

# Import inside container
docker exec -i mysql_container mysql -u root -p si_kompeten < /tmp/si_kompeten_fixed.sql
```

### Docker MariaDB
```bash
# Copy SQL file to container
docker cp si_kompeten_fixed.sql mariadb_container:/tmp/

# Import inside container
docker exec -i mariadb_container mysql -u root -p si_kompeten < /tmp/si_kompeten_fixed.sql
```

## 🔍 Verification

### Check Collation
```sql
-- Check database collation
SELECT DEFAULT_COLLATION_NAME FROM information_schema.SCHEMATA WHERE SCHEMA_NAME = 'si_kompeten';

-- Check table collations
SELECT TABLE_NAME, TABLE_COLLATION 
FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = 'si_kompeten';
```

### Check Character Set
```sql
-- Check database character set
SELECT DEFAULT_CHARACTER_SET_NAME FROM information_schema.SCHEMATA WHERE SCHEMA_NAME = 'si_kompeten';

-- Check table character sets
SELECT TABLE_NAME, TABLE_COLLATION 
FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = 'si_kompeten';
```

## 🛠️ Environment Variables

Update your `.env` file:
```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/si_kompeten"
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=si_kompeten

# Prisma
DATABASE_URL="mysql://username:password@localhost:3306/si_kompeten?schema=public"
```

## 📝 Prisma Commands

After importing the database:
```bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# View database in Prisma Studio
npx prisma studio
```

## 🚨 Common Errors & Solutions

### Error: "Unknown collation: 'utf8mb4_0900_ai_ci'"
**Solution**: Use the fixed SQL file or run the collation fix script

### Error: "Access denied for user"
**Solution**: Check database credentials and permissions

### Error: "Database 'si_kompeten' doesn't exist"
**Solution**: Create the database first:
```sql
CREATE DATABASE si_kompeten CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Error: "Table 'si_kompeten.table_name' doesn't exist"
**Solution**: Ensure the SQL file was imported completely without errors

## 🔄 Backup & Restore

### Create Backup
```bash
mysqldump -u root -p si_kompeten > si_kompeten_backup.sql
```

### Restore Backup
```bash
mysql -u root -p si_kompeten < si_kompeten_backup.sql
```

## 📞 Support

If you continue to have issues:
1. Check your database version compatibility
2. Verify all environment variables are correct
3. Ensure proper database permissions
4. Check database server logs for detailed error messages
