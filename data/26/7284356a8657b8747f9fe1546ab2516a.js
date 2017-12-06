callback({
  "levelNumber": 26,
  "size": 35,
  "steps": 66,
  "successRatio": 1,
  "type": "unroll",
  "author": "mrflip",
  "hash": "7284356a8657b8747f9fe1546ab2516a",
  "path": "26-Small-Divide-15.76/35.66.unroll-mrflip.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 26-Small-Divide - SIZE 35/15 - SPEED 66/76 --\n\n-- For each pair of inbox items, floor divide (discard remainder) the first by\n-- the second by counting how many times the second can subtract the first until\n-- further subtraction returns a negative value.\n\n    JUMP     f\na:\nb:\nc:\nd:\ne:\n    COPYFROM 8\n    OUTBOX\nf:\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    COPYFROM 9\n    COPYTO   8\ng:\n    COPYFROM 0\n    SUB      1\n    JUMPN    a\n    COPYTO   0\n    BUMPUP   8\n\n    COPYFROM 0\n    SUB      1\n    JUMPN    b\n    COPYTO   0\n    BUMPUP   8\n\n    COPYFROM 0\n    SUB      1\n    JUMPN    c\n    COPYTO   0\n    BUMPUP   8\n\n    COPYFROM 0\n    SUB      1\n    JUMPN    d\n    COPYTO   0\n    BUMPUP   8\n\n    COPYFROM 0\n    SUB      1\n    JUMPN    e\n    COPYTO   0\n    BUMPUP   8\n\n    JUMP     g\n    \n"
});