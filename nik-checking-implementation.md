# NIK Checking Implementation for Encrypted Data

## 🚀 **Problem Solved**

**Challenge**: Check if a NIK already exists in the peserta table when the NIK is stored encrypted, preventing duplicate registrations.

**Solution**: Implemented comprehensive NIK checking by decrypting and comparing all existing encrypted NIKs.

---

## 🔧 **Implementation Overview**

### **1. Core NIK Checking Method**
```typescript
async checkNikExists(nik: string): Promise<void>
```

**How it works:**
1. Fetch all peserta records with encrypted NIKs
2. Decrypt each encrypted NIK using the encryption service
3. Compare decrypted NIKs with the new NIK
4. Throw exception if duplicate found, continue if available

### **2. Registration Integration**
```typescript
// In registrasi() method
await this.checkNikExists(nik); // Check before registration
const encryptedNik = this.encryptionService.encryptNIKData(nik);
```

**Flow:**
1. Validate NIK format
2. Check if NIK already exists
3. If available, proceed with registration
4. If duplicate, throw conflict exception

---

## 📡 **API Endpoints**

### **1. Check Single NIK**
```bash
POST /peserta/registrasi/check-nik
Authorization: Bearer <token>
Content-Type: application/json

{
  "nik": "1234567890123456"
}
```

**Response (Available):**
```json
{
  "status": true,
  "message": "NIK is available for registration",
  "data": {
    "nik": "1234567890123456",
    "available": true,
    "message": "NIK tersedia untuk registrasi"
  }
}
```

**Response (Duplicate):**
```json
{
  "status": true,
  "message": "NIK already exists",
  "data": {
    "nik": "1234567890123456",
    "available": false,
    "message": "NIK sudah terdaftar dalam sistem",
    "existing_peserta": {
      "uuid": "existing-uuid",
      "nama_lengkap": "Existing Name",
      "email": "existing@email.com"
    }
  }
}
```

### **2. Check Multiple NIKs**
```bash
POST /peserta/registrasi/check-multiple-niks
Authorization: Bearer <token>
Content-Type: application/json

{
  "niks": ["1234567890123456", "9876543210987654", "1111111111111111"]
}
```

**Response:**
```json
{
  "status": true,
  "message": "NIK availability check completed",
  "data": {
    "total_checked": 3,
    "available_count": 2,
    "existing_count": 1,
    "available_niks": ["1234567890123456", "1111111111111111"],
    "existing_niks": [
      {
        "nik": "9876543210987654",
        "peserta": {
          "uuid": "existing-uuid",
          "nama_lengkap": "Existing Name",
          "email": "existing@email.com"
        }
      }
    ]
  }
}
```

---

## 🔒 **Security Features**

### **1. Encryption Integration**
- Uses existing `EncryptionService` for consistent encryption/decryption
- Maintains security of stored NIKs
- No plaintext NIK storage

### **2. Error Handling**
- Comprehensive error logging
- Graceful handling of decryption failures
- No sensitive data exposure in error messages

### **3. Authentication**
- All endpoints protected by `AuthGuard`
- Requires valid authentication token
- Audit trail for all NIK checks

---

## ⚡ **Performance Considerations**

### **1. Current Implementation**
- **Pros**: Simple, reliable, works with existing encryption
- **Cons**: O(n) complexity - decrypts all NIKs for each check

### **2. Optimized Alternative (Hash-based)**
```typescript
// Alternative approach using NIK hashes
private async checkNikExistsOptimized(nik: string): Promise<void>
```

**How it works:**
1. Create SHA256 hash of NIK
2. Store hash in separate field (`nik_hash`)
3. Check hash existence (O(1) lookup)
4. Much faster for large datasets

**Implementation Requirements:**
- Add `nik_hash` field to peserta schema
- Store hash during registration
- Use hash for duplicate checking

---

## 📊 **Database Schema Considerations**

### **Current Schema (Text Field)**
```prisma
model peserta {
  id            BigInt   @id @default(autoincrement())
  uuid          String   @unique
  nik           Text?    // Encrypted NIK
  // ... other fields
}
```

### **Optimized Schema (Hash Field)**
```prisma
model peserta {
  id            BigInt   @id @default(autoincrement())
  uuid          String   @unique
  nik           Text?    // Encrypted NIK
  nik_hash      String?  @unique // SHA256 hash for fast lookup
  // ... other fields
}
```

---

## 🛠️ **Usage Examples**

### **1. Registration with NIK Check**
```typescript
// Automatic check during registration
const result = await registrasiService.registrasi({
  nik: "1234567890123456",
  email: "user@example.com",
  // ... other fields
});
// Will throw exception if NIK already exists
```

### **2. Manual NIK Check**
```typescript
// Check before showing registration form
try {
  await registrasiService.checkNikExists("1234567890123456");
  // NIK is available
} catch (error) {
  if (error.status === 409) {
    // NIK already exists
    console.log("Duplicate NIK:", error.response.existing_peserta);
  }
}
```

### **3. Batch NIK Check**
```typescript
// Check multiple NIKs at once
const result = await registrasiService.checkMultipleNiks([
  "1234567890123456",
  "9876543210987654",
  "1111111111111111"
]);

console.log("Available:", result.available);
console.log("Existing:", result.existing);
```

---

## 📈 **Performance Metrics**

### **Current Implementation**
- **Time Complexity**: O(n) where n = number of peserta records
- **Space Complexity**: O(1) - no additional storage
- **Suitable for**: Small to medium datasets (< 10,000 records)

### **Optimized Implementation (Hash-based)**
- **Time Complexity**: O(1) - single database lookup
- **Space Complexity**: O(n) - additional hash storage
- **Suitable for**: Large datasets (> 10,000 records)

---

## 🔄 **Migration Strategy**

### **Phase 1: Current Implementation**
- Deploy current solution
- Monitor performance
- Gather usage metrics

### **Phase 2: Optimization (Optional)**
1. Add `nik_hash` field to schema
2. Create migration to populate hashes for existing records
3. Update registration to store both encrypted NIK and hash
4. Switch to hash-based checking for new registrations

---

## 🎯 **Business Benefits**

1. **Data Integrity**: Prevents duplicate registrations
2. **User Experience**: Clear error messages for duplicate NIKs
3. **Security**: Maintains encryption while enabling duplicate checking
4. **Flexibility**: Multiple checking methods (single, batch)
5. **Audit Trail**: Comprehensive logging for compliance
6. **Performance Options**: Scalable solutions for different dataset sizes

The implementation provides a robust solution for checking encrypted NIK duplicates while maintaining security and providing flexibility for future optimizations.
