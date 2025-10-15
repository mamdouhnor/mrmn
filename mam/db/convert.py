with open('23082025_V1.17.sql', 'rb') as f_in:
    content = f_in.read()

# Check for and remove BOM if present
if content.startswith(b'\xef\xbb\xbf'):
    content = content[3:]

with open('23082025_V1.17_n.sql', 'wb') as f_out:
    f_out.write(content)