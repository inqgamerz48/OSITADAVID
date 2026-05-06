import os
import shutil

source_dir = r"C:\Users\nandu\.gemini\antigravity\brain\1fc6f423-7a7d-4d9b-89ca-0560bda06da3"
target_dir = r"c:\Users\nandu\Desktop\INQ STUDIOS PROJECTS\osita\public\products"

files_to_copy = [
    "media__1778001094106.png",
    "media__1778001099285.png",
    "media__1778001103873.png",
    "media__1778001108308.png",
    "media__1778001113016.png",
    "media__1778001147043.png",
    "media__1778001152433.png",
    "media__1778001157656.png",
    "media__1778001161929.png",
    "media__1778001166410.png",
    "media__1778001175337.png",
    "media__1778001180804.png",
]

for i, filename in enumerate(files_to_copy, 1):
    src = os.path.join(source_dir, filename)
    dst = os.path.join(target_dir, f"{i}.png")
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {filename} to {i}.png")
    else:
        print(f"File not found: {filename}")
