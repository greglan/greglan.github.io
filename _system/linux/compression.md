---
title:  "Compression cheatsheet"
topic: "linux"
tags: linux
---


# Tar
```
tar cf archive_name.tar file1 file2 dir1 dir2   # Create archive
tar xf archive_name.tar[.xz|gz]               # Extract. Recognizes the format by itself
```


# gzip (fast)
```
gzip file       # Compress
tar czf archive_name.tar file1 file2 dir1 dir2
gunzip file.gz  # Uncompress
tar xzf archive_name.tar
```


# bzip2 (performance)
```bash
bzip2 file          # Compress
tar cjf archive_name.tar file1 file2 dir1 dir2
bunzip2 file.bz2    # Uncompress
tar xjf archive_name.tar
```


# Zip files
```bash
zip myzip file1 file2 file3  # Create file myzip.zip
unzip file.zip
```

# RAR files
```bash
unrar x archive.rar # Decompress
rar a ArchiveName File_1 File_2 Dir_1 Dir_2 # Compress
``
