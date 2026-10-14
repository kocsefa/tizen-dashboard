# =========================================================================
# Tizen Hosted App - WGT Paketleme Scripti
# =========================================================================

$projectRoot = $PSScriptRoot
$hostedDir = Join-Path $projectRoot "hosted-wgt"
$outputWgt = Join-Path $projectRoot "tizen-dashboard-hosted.wgt"
$tempZip = Join-Path $projectRoot "temp_package.zip"

Write-Host "----------------------------------------------------" -ForegroundColor Cyan
Write-Host "  Tizen Hosted Web App Paketleniyor (.wgt)...       " -ForegroundColor Yellow
Write-Host "----------------------------------------------------" -ForegroundColor Cyan

# Varsa eski dosyaları temizle
if (Test-Path $outputWgt) { Remove-Item $outputWgt -Force }
if (Test-Path $tempZip) { Remove-Item $tempZip -Force }

# hosted-wgt içindeki dosyaları zip arşivine sıkıştır
Write-Host "1. Dosyalar arşivleniyor: config.xml, index.html, icon.png" -ForegroundColor Gray
Compress-Archive -Path "$hostedDir\*" -DestinationPath $tempZip -CompressionLevel Optimal

# .zip dosyasını .wgt uzantısına dönüştür (WGT standart ZIP formatıdır)
Rename-Item -Path $tempZip -NewName (Split-Path $outputWgt -Leaf)

Write-Host ""
Write-Host "BAŞARILI! WGT Paketi Hazırlandı:" -ForegroundColor Green
Write-Host "Dosya: $outputWgt" -ForegroundColor Cyan
$size = (Get-Item $outputWgt).Length / 1KB
Write-Host ("Boyut: {0:N2} KB (Son derece hafif ve hızlı!)" -f $size) -ForegroundColor Gray
Write-Host ""
Write-Host "Bu WGT dosyası TV'ye kurulduğunda doğrudan:" -ForegroundColor Yellow
Write-Host "https://kocsefa.github.io/tizen-dashboard/ adresini çalıştıracaktır." -ForegroundColor White
Write-Host "----------------------------------------------------" -ForegroundColor Cyan
