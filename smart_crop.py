import cv2
import os

image_path = r"C:\Users\nandu\.gemini\antigravity\brain\1fc6f423-7a7d-4d9b-89ca-0560bda06da3\media__1777999825662.jpg"
output_dir = r"c:\Users\nandu\Desktop\INQ STUDIOS PROJECTS\osita\public\products"

os.makedirs(output_dir, exist_ok=True)

img = cv2.imread(image_path)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold to find anything that is not purely black
_, thresh = cv2.threshold(gray, 15, 255, cv2.THRESH_BINARY)

# Find all non-zero points
points = cv2.findNonZero(thresh)

if points is not None:
    x, y, w, h = cv2.boundingRect(points)
    print(f"Original size: {img.shape}")
    print(f"Content bounding box: x={x}, y={y}, w={w}, h={h}")

    cols = 4
    rows = 3

    cell_w = w // cols
    cell_h = h // rows

    count = 1
    for r in range(rows):
        for c in range(cols):
            left = x + c * cell_w
            top = y + r * cell_h
            right = x + (c + 1) * cell_w
            bottom = y + (r + 1) * cell_h
            
            # Crop the cell from the original image
            cell_img = img[top:bottom, left:right]
            
            out_path = os.path.join(output_dir, f"{count}.jpg")
            cv2.imwrite(out_path, cell_img)
            count += 1

    print(f"Smart cropped {count-1} images successfully.")
else:
    print("Could not find any content in the image.")
