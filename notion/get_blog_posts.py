import os
import datetime
from notion.client import NotionClient

token-v2 = "2abd929bf9d621e5a586dd8d44df847550d4c5356e055a0a24a6faa8851afe5e9226dc536ff0668a19a7b14522f1e2d3c6769e27e054eb5fe4c1c4b7a00ac1c68415eb63820172f332f9d4fe5ddd"
client = NotionClient(token-v2)

posts-url = "https://www.notion.so/doitduri/Android-b46b0b30f5c24ac995c6231c915a26a0"
blog_home = client.get_block("posts-url")

# Main Loop
for post in blog_home.children:

    # Handle Frontmatter
    text = """---
title: %s
date: "%s"
description: ""
---""" % (post.title, datetime.datetime.now())

    # Handle Title
    text = text + '\n\n' + '# ' + post.title + '\n\n'

    for content in post.children:

        # Handles H1
        if (content.type == 'header'):
            text = text + '# ' + content.title + '\n\n'

        # Handles H2
        if (content.type == 'sub_header'):
            text = text + '## ' + content.title + '\n\n'

        # Handles H3
        if (content.type == 'sub_sub_header'):
            text = text + '### ' + content.title + '\n\n'

        # Handles Code Blocks
        if (content.type == 'code'):
            text = text + '```\n' + content.title + '\n```\n'

        # Handles Images
        if (content.type == 'image'):
            text = text + '![' + content.id + '](' + content.source + ')\n\n'

        # Handles Bullets
        if (content.type == 'bulleted_list'):
            text = text + '* ' + content.title + '\n'

        # Handles Dividers
        if (content.type == 'divider'):
            text = text + '---' + '\n'

        # Handles Basic Text, Links, Single Line Code
        if (content.type == 'text'):
            text = text + content.title + '\n'

    title = post.title.replace(' ', '-')
    title = title.replace(',', '')
    title = title.replace(':', '')
    title = title.replace(';', '')
    title = title.lower()

    try:
        os.mkdir('../content/posts/' + title)
    except:
        pass
        print("fail")

    file = open('../content/posts/' + title + '/index.mdx', 'w')
    print('Wrote A New Page')
    print(text)
    file.write(text)
