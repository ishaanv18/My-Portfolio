from PIL import Image
import os

# Directory containing images
public_dir = r"c:\Users\ishaa\Downloads\AntiGravity\My PortFolio\public"

# Images to compress
images_to_compress = [
    "arribot_logo.png",
    "ai_dungeon_logo.png",
    "ishaan_profile.jpg",
    "empowerly_logo.png"
]

for img_name in images_to_compress:
    img_path = os.path.join(public_dir, img_name)
    
    if os.path.exists(img_path):
        # Open image
        img = Image.open(img_path)
        
        # Convert to RGB if PNG (for WebP compatibility)
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Save as WebP with quality 80
        webp_name = img_name.rsplit('.', 1)[0] + '.webp'
        webp_path = os.path.join(public_dir, webp_name)
        img.save(webp_path, 'WEBP', quality=80, method=6)
        
        # Get file sizes
        original_size = os.path.getsize(img_path) / 1024
        new_size = os.path.getsize(webp_path) / 1024
        savings = ((original_size - new_size) / original_size) * 100
        
        print(f"{img_name}: {original_size:.1f}KB -> {webp_name}: {new_size:.1f}KB (saved {savings:.1f}%)")
    else:
        print(f"File not found: {img_name}")

print("\nCompression complete!")
