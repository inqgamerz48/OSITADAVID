import os
from PIL import Image

image_path = r"C:\Users\nandu\.gemini\antigravity\brain\1fc6f423-7a7d-4d9b-89ca-0560bda06da3\media__1777999825662.jpg"
output_dir = r"c:\Users\nandu\Desktop\INQ STUDIOS PROJECTS\osita\public\products"

os.makedirs(output_dir, exist_ok=True)

img = Image.open(image_path)
width, height = img.size

cols = 4
rows = 3
w = width // cols
h = height // rows

count = 1
for r in range(rows):
    for c in range(cols):
        left = c * w
        top = r * h
        right = (c + 1) * w
        bottom = (r + 1) * h
        
        # Crop the cell
        cropped = img.crop((left, top, right, bottom))
        # Optional: Crop the bottom 20% to remove the text embedded in the image
        # text_crop_bottom = bottom - int(h * 0.15)
        # cropped = img.crop((left, top, right, text_crop_bottom))
        
        cropped.save(os.path.join(output_dir, f"{count}.jpg"))
        count += 1

print(f"Cropped {count-1} images successfully.")
