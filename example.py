from file_renamer import file_renamer

fr = file_renamer.BulkFileRenamer(
    "C:/Users/Dell/Desktop/TestFiles",
    prefix_value="demo",   # set prefix here
    start=1
)

fr.rename_files()