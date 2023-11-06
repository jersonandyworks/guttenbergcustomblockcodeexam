<?php

function convert_json($array)
{
    $result = [];
    $stack = [];

    foreach ($array as $element) {
        $item = [
            'id' => $element['id'],
            'level' => $element['attributes']['level'],
        ];

        // If stack is empty or item's level is 1, push to result array
        if (empty($stack) || $item['level'] == 1) {
            $result[] = $item;
            $stack = [ & $result[count($result) - 1]]; // Reset stack with reference to last item
            continue;
        }

        // Find parent in the stack
        while (count($stack) > 0) {
            $parent = &$stack[count($stack) - 1];

            // If the current level is exactly one more than the parent's level
            if ($item['level'] == $parent['level'] + 1) {
                // Initialize 'children' array if not present
                if (!array_key_exists('children', $parent)) {
                    $parent['children'] = [];
                }

                // Add item as child of parent
                $parent['children'][] = $item;

                // Add reference of new item onto stack
                $stack[] = &$parent['children'][count($parent['children']) - 1];
                break;
            } else {
                // If not, pop from stack and continue to look for parent
                array_pop($stack);
            }
        }
    }

    return $result;
}

$json = '[
  {
    "id": 1,
    "attributes": {
      "level": 1
    }
  },
  {
    "id": 2,
    "attributes": {
      "level": 2
    }
  },
  {
    "id": 3,
    "attributes": {
      "level": 3
    }
  },
  {
    "id": 4,
    "attributes": {
      "level": 2
    }
  },
  {
    "id": 5,
    "attributes": {
      "level": 1
    }
  },
  {
    "id": 6,
    "attributes": {
      "level": 2
    }
  },
  {
    "id": 7,
    "attributes": {
      "level": 3
    }
  }
]';

$arr = json_decode($json, true);
$hierarchy = convert_json($arr);
echo json_encode($hierarchy, JSON_PRETTY_PRINT);
