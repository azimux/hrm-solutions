callback({
  "levelNumber": 20,
  "size": 23,
  "steps": 105,
  "successRatio": 1,
  "author": "eiTTio",
  "hash": "491e58f416a0fa290198f563d31dd4c4",
  "path": "20-Multiplication-Workshop-15.109/23.105-eiTTio.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 23/15 - SPEED 105/109 --\n\n    JUMP     e\na:\n    COPYTO   6\n    INBOX   \nb:\nc:\n    COPYFROM 6\nd:\n    OUTBOX  \ne:\n    INBOX   \n    JUMPZ    a\n    COPYTO   6\n    COPYTO   5\n    INBOX   \n    JUMPZ    d\n    COPYTO   0\nf:\n    BUMPDN   0\n    JUMPZ    b\n    COPYFROM 6\n    ADD      5\n    COPYTO   6\n    BUMPDN   0\n    JUMPZ    c\n    COPYFROM 6\n    ADD      5\n    COPYTO   6\n    JUMP     f\n\n"
});