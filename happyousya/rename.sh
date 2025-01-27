
## フォルダパスを指定
$folderPath = "C:\Users\wanna\OneDrive\ドキュメント\wakamono2024HP\happyousya\chiba"  # 適宜変更

# フォルダ名を取得
$folderName = Split-Path -Leaf $folderPath

# ファイルを取得
$files = Get-ChildItem -Path $folderPath -File

# ファイル名変更処理
$counter = 1
foreach ($file in $files) {
    # 新しいファイル名を生成
    $newName = "{0}{1}{2}" -f $folderName, $counter, $file.Extension

    # 元ファイルのフルパス
    $oldFilePath = $file.FullName

    # 新しいフルパス
    $newFilePath = Join-Path -Path $folderPath -ChildPath $newName

    # ファイル名変更
    Rename-Item -Path $oldFilePath -NewName $newFilePath

    # カウンタをインクリメント
    $counter++
}

Write-Host "ファイル名の変更が完了しました。"

