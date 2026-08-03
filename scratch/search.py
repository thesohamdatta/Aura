import os

search_terms = ['summeries', 'summaries', 'superpowers']
target_dirs = ['./website', './docs']

for target in target_dirs:
    for root, dirs, files in os.walk(target):
        for file in files:
            path = os.path.join(root, file)
            # Skip large binary files or reference assets if any
            if file.endswith(('.html', '.js', '.css', '.md', '.json', '.txt')):
                try:
                    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        content_lower = content.lower()
                        for term in search_terms:
                            if term in content_lower:
                                lines = content.splitlines()
                                for idx, line in enumerate(lines, 1):
                                    if term in line.lower():
                                        print(f"{path}:{idx}: {line.strip()}")
                except Exception as e:
                    pass
