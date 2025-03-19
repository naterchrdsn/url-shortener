import random
import string

# Would be nice to extract this to static config or environment variable
length_setting = 6

def generate_short_code(length = length_setting) -> str:
    # quick short code generator uses both upper and lowercase letters, combined with single numbers
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(length))