import os
import re

files = [
    "components/About.tsx",
    "components/Education.tsx",
    "components/Footer.tsx",
    "components/Navbar.tsx",
    "components/Projects.tsx",
    "components/Resume.tsx",
    "components/Skills.tsx",
    "app/page.tsx",
    "components/Hero.tsx"
]

replacements = [
    (r"purple-?(\d+)", r"orange-\1"),
    (r"blue-?(\d+)", r"yellow-\1"),
    (r"teal-?(\d+)", r"zinc-\1"),
    (r"pink-?(\d+)", r"amber-\1"),
    (r"indigo-?(\d+)", r"orange-\1"),
    (r"cyan-?(\d+)", r"zinc-\1"),
    (r"emerald-?(\d+)", r"amber-\1"),
    (r"green-?(\d+)", r"yellow-\1"),
    (r"violet-?(\d+)", r"orange-\1"),
    (r"fuchsia-?(\d+)", r"amber-\1"),
    (r"lime-?(\d+)", r"yellow-\1"),
    (r"rose-?(\d+)", r"orange-\1"),
    (r"slate-?(\d+)", r"zinc-\1"),
]

for file_path in files:
    full_path = os.path.join(".", file_path)
    if not os.path.exists(full_path):
        continue
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()

    for old, new in replacements:
         content = re.sub(old, new, content)

    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
