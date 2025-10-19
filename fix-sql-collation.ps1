# PowerShell script to fix utf8mb4_0900_ai_ci collation issues in SQL files
# This collation is MySQL 8.0+ specific and not supported in MariaDB or older MySQL

param(
    [Parameter(Mandatory=$true)]
    [string]$InputFile,
    
    [Parameter(Mandatory=$false)]
    [string]$OutputFile = ""
)

Write-Host "🔧 SQL Collation Fixer (PowerShell)" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""

# Check if input file exists
if (-not (Test-Path $InputFile)) {
    Write-Host "❌ Error: Input file not found: $InputFile" -ForegroundColor Red
    exit 1
}

# Generate output filename if not provided
if ([string]::IsNullOrEmpty($OutputFile)) {
    $InputPath = Split-Path $InputFile -Parent
    $InputName = [System.IO.Path]::GetFileNameWithoutExtension($InputFile)
    $InputExt = [System.IO.Path]::GetExtension($InputFile)
    $OutputFile = Join-Path $InputPath "${InputName}_fixed${InputExt}"
}

try {
    Write-Host "📖 Reading SQL file..." -ForegroundColor Yellow
    $sqlContent = Get-Content $InputFile -Raw -Encoding UTF8
    
    Write-Host "🔍 Analyzing collation issues..." -ForegroundColor Yellow
    
    # Count occurrences of problematic collation
    $problematicCollation = "utf8mb4_0900_ai_ci"
    $count = ($sqlContent | Select-String $problematicCollation -AllMatches).Matches.Count
    
    Write-Host "   Found $count instances of utf8mb4_0900_ai_ci collation" -ForegroundColor White
    
    if ($count -eq 0) {
        Write-Host "✅ No collation issues found!" -ForegroundColor Green
        exit 0
    }

    Write-Host "🛠️  Fixing collation issues..." -ForegroundColor Yellow
    
    # Define all problematic MySQL 8.0+ collations and their replacements
    $collationFixes = @(
        # UTF8MB4 0900 series (MySQL 8.0.0+)
        @{ From = "utf8mb4_0900_ai_ci"; To = "utf8mb4_unicode_ci"; Description = "UTF8MB4 0900 AI CI" },
        @{ From = "utf8mb4_0900_bin"; To = "utf8mb4_bin"; Description = "UTF8MB4 0900 BIN" },
        @{ From = "utf8mb4_0900_as_ci"; To = "utf8mb4_unicode_ci"; Description = "UTF8MB4 0900 AS CI" },
        @{ From = "utf8mb4_0900_as_cs"; To = "utf8mb4_unicode_ci"; Description = "UTF8MB4 0900 AS CS" },
        
        # UTF8MB4 UCA1400 series (MySQL 8.0.30+)
        @{ From = "utf8mb4_uca1400_ai_ci"; To = "utf8mb4_unicode_ci"; Description = "UTF8MB4 UCA1400 AI CI" },
        @{ From = "utf8mb4_uca1400_bin"; To = "utf8mb4_bin"; Description = "UTF8MB4 UCA1400 BIN" },
        @{ From = "utf8mb4_uca1400_as_ci"; To = "utf8mb4_unicode_ci"; Description = "UTF8MB4 UCA1400 AS CI" },
        @{ From = "utf8mb4_uca1400_as_cs"; To = "utf8mb4_unicode_ci"; Description = "UTF8MB4 UCA1400 AS CS" },
        
        # Other potential MySQL 8.0+ collations
        @{ From = "utf8mb4_1500_ai_ci"; To = "utf8mb4_unicode_ci"; Description = "UTF8MB4 1500 AI CI" },
        @{ From = "utf8mb4_1500_bin"; To = "utf8mb4_bin"; Description = "UTF8MB4 1500 BIN" }
    )
    
    # Apply all collation fixes
    $fixedContent = $sqlContent
    $totalFixes = 0
    $fixSummary = @()
    
    foreach ($fix in $collationFixes) {
        $matches = ($fixedContent | Select-String $fix.From -AllMatches).Matches.Count
        if ($matches -gt 0) {
            Write-Host "   Found $matches instances of $($fix.Description)" -ForegroundColor White
            $fixedContent = $fixedContent -replace $fix.From, $fix.To
            $totalFixes += $matches
            $fixSummary += @{
                Description = $fix.Description
                Count = $matches
                Replacement = $fix.To
            }
        }
    }

    Write-Host "💾 Writing fixed SQL file..." -ForegroundColor Yellow
    $fixedContent | Out-File $OutputFile -Encoding UTF8

    Write-Host ""
    Write-Host "✅ Collation fix completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📊 Summary:" -ForegroundColor Cyan
    Write-Host "   Input file: $InputFile" -ForegroundColor White
    Write-Host "   Output file: $OutputFile" -ForegroundColor White
    Write-Host "   Total fixes applied: $totalFixes" -ForegroundColor White
    Write-Host ""
    Write-Host "🔄 Applied fixes:" -ForegroundColor Cyan
    foreach ($fix in $fixSummary) {
        Write-Host "   • $($fix.Description): $($fix.Count) instances → $($fix.Replacement)" -ForegroundColor White
    }
    Write-Host ""
    Write-Host "📝 Next steps:" -ForegroundColor Cyan
    Write-Host "   1. Use the fixed file: $OutputFile" -ForegroundColor White
    Write-Host "   2. Import it into your database" -ForegroundColor White
    Write-Host "   3. The collation will now be compatible with MariaDB and older MySQL versions" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 Alternative collations you can use:" -ForegroundColor Cyan
    Write-Host "   • utf8mb4_unicode_ci (recommended - widely supported)" -ForegroundColor White
    Write-Host "   • utf8mb4_general_ci (faster but less accurate)" -ForegroundColor White
    Write-Host "   • utf8mb4_bin (case-sensitive, binary)" -ForegroundColor White
    Write-Host ""
    Write-Host "🎯 Compatibility:" -ForegroundColor Cyan
    Write-Host "   ✅ MySQL 5.7+" -ForegroundColor Green
    Write-Host "   ✅ MySQL 8.0+" -ForegroundColor Green
    Write-Host "   ✅ MariaDB 10.2+" -ForegroundColor Green
    Write-Host "   ✅ All major database hosting providers" -ForegroundColor Green

} catch {
    Write-Host "❌ Error fixing SQL file: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
