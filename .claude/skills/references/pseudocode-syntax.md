# Cambridge 9618 Pseudocode Syntax

All algorithm and code examples must use Cambridge 9618 pseudocode. No Python, no JavaScript.
Authoritative reference: `resources/cambridge-pseudocode.md`

| Construct | Cambridge 9618 Pseudocode |
|-----------|--------------------------|
| Assignment | `x ← 5` |
| Output | `OUTPUT x` |
| Input | `INPUT x` |
| If / else | `IF condition THEN ... ELSE ... ENDIF` |
| Case | `CASE OF x ... OTHERWISE ... ENDCASE` |
| For loop | `FOR i ← 1 TO 10 ... NEXT i` |
| While loop | `WHILE condition ... ENDWHILE` |
| Repeat loop | `REPEAT ... UNTIL condition` |
| Procedure | `PROCEDURE name(param : TYPE) ... ENDPROCEDURE` |
| Function | `FUNCTION name(param : TYPE) RETURNS TYPE ... ENDFUNCTION` |
| Array (1D) | `DECLARE arr : ARRAY[1:10] OF INTEGER` |
| Array (2D) | `DECLARE grid : ARRAY[1:3, 1:3] OF INTEGER` |
| String concat | `name ← firstName & ' ' & lastName` |
| Equality check | `=` (never `==`) · Not-equal: `<>` |

Use `←` for assignment only. Never use `=` for assignment.
