#!/bin/bash

# Create or clear the output file
echo "[" > santos_data.json

# Read URLs from urls.txt
while IFS= read -r url; do
    echo "Processing $url"

    # Fetch the page content
    content=$(curl -s "$url")
    
    # Extract the title using pup
    title=$(echo "$content" | pup 'h1.entry-title text{}' | head -n 1)

    # Extract the description using pup.
    description=$(echo "$content" | pup '.entry-content text{}')

    # Process the description to get the relevant part
    # It starts after "Origem" and ends before "Minha oração"
    description_cleaned=$(echo "$description" | awk '/Origem/,/Minha oração/' | sed '/Minha oração/d' | sed 's/Origem//' | sed 's/Origens//' | tr -s '\n' ' ' | sed 's/"/\"/g' | sed 's/^[ 	]*//;s/[ 	]*$//')

    # If the above fails, try another pattern
    if [ -z "$description_cleaned" ]; then
        description_cleaned=$(echo "$description" | awk '/Origens/,/Minha oração/' | sed '/Minha oração/d' | sed 's/Origens//' | tr -s '\n' ' ' | sed 's/"/\"/g' | sed 's/^[ 	]*//;s/[ 	]*$//')
    fi
    
    # Skip if title or description is empty
    if [ -z "$title" ] || [ -z "$description_cleaned" ]; then
        echo "Skipping $url due to empty title or description."
        continue
    fi

    # Format as JSON object and append to file
    echo "  {"
    echo "    \"title\": \"$title\","
    echo "    \"description\": \"$description_cleaned\""
    echo "  },"

done < urls.txt

# Remove the trailing comma from the last JSON object
sed -i '$ s/,$//' santos_data.json

# End JSON array
echo "]" >> santos_data.json

echo "Scraping complete. Data saved to santos_data.json"
