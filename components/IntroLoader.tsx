"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const EMBLEM_SVG_BASE64 =
  "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzODAiIGhlaWdodD0iNDAzIiB2aWV3Qm94PSIwIDAgMzgwIDQwMyI+PHRpdGxlPkhBUlNIIEVtYmxlbSAtIE9yYW5nZSBHcmFkaWVudDwvdGl0bGU+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiYXNlR3JhZCIgeDE9IjAlIiB4Mj0iMTAwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmOWEyZSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZjI2MTBjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYzI0MTBjIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImFjY2VudEdyYWQiIHgxPSIwJSIgeDI9IjEwMCUiIHkxPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmU5YTgiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmIwMjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iaGlnaGxpZ2h0R3JhZCIgeDE9IjAlIiB4Mj0iMTAwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZDlhMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmYTk0ZCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGlkPSJlbWJsZW0iIHN0cm9rZT0ibm9uZSIgdHJhbnNmb3JtPSJtYXRyaXgoLjEgMCAwIC0uMSAwIDQwMykiPjxnIGlkPSJiYXNlLWxheWVyIiBmaWxsPSJ1cmwoI2Jhc2VHcmFkKSI+PHBhdGggZD0iTTIzNTAgMzE5NnYtNjc1bC02Mi00N2MtMTI1LTk1LTMzNC0yNTgtMzYzLTI4My0xNi0xNC0yMy0xOC0xNi04IDEyIDE1IDExIDE3LTggMTdxLTIyLjUgMC0xNS0xMmM0LTctMTMgNS0zNyAyOC01OCA1My0xODYgMTU0LTE5NiAxNTQtNCAwLTM5IDI3LTc4IDYxLTM4IDMzLTgxIDY2LTk1IDcybC0yNSAxMi0zIDY3M2MtMSAzNjktNSA2NzItOCA2NzItNCAwLTM0LTI0LTY4LTUzcy0xNzEtMTQ1LTMwNi0yNTgtMzI5LTI3Ni00MzItMzYybC0xODgtMTU2IDE0My0zIDE0Mi0zIDUtMzkwYzMtMjE0IDctMzkxIDgtMzkzczcgMCAxMiAzYzYgMyAxMy0xIDE2LTkgMy05IDEwLTE0IDE0LTExIDUgMyAxNy02IDI4LTIwIDExLTEzIDIyLTIyIDI1LTE5IDIgMyAxNC03IDI2LTIyIDExLTE1IDIxLTIzIDIxLTE4IDEgNSAxMC0yIDIwLTE1IDExLTEzIDIwLTE5IDIwLTE1IDEgNSA5LTEgMTktMTNzMjEtMjAgMjQtMTdjMiAzIDE0LTcgMjYtMjIgMTEtMTUgMjEtMjMgMjEtMTggMSA1IDktMSAxOS0xM3MyMS0yMCAyNC0xN2MyIDMgMTQtNiAyNS0yMCAxMC0xNCAyMS0yMyAyNC0yMSAzIDMgMjMtMTIgNDYtMzMgMjMtMjIgNDItMzYgNDItMzMgMSAzIDktNCAxOS0xNnMyMS0yMCAyNC0xN2MyIDMgMTUtOCAyNy0yM3MyNS0yNyAyOC0yNmM0IDEgODctNjAgMTg1LTEzNWwxNzctMTM2di0zNTdsMjktMjVjMTYtMTMgNDYtNDkgNjYtNzkgMjAtMzEgNjItODUgOTItMTIybDU2LTY2IDI5IDM0YzE1IDE5IDU5IDc1IDk3IDEyNCAzOCA1MCA3OSAxMDAgOTEgMTEzIDIxIDIyIDIyIDMyIDIwIDIwMWwtMSAxNzcgNDMgMzFjMjQgMTcgMjMwIDE3NiA0NTggMzUzbDQxNSAzMjMgNSAzODEgNSAzODFoMTQyYzE2MS0xIDE1OC01IDU3IDc5LTMzIDI4LTIwNiAxNzMtMzg1IDMyMi0xNzggMTQ5LTM3MCAzMTAtNDI2IDM1OGwtMTAzIDg3em0tMTA0NSAyNTdjNC00MiA1LTI4MiAzLTUzMi0zLTI1MS00LTQ3Mi0xLTQ5MSA0LTI5IDE2LTQ0IDcxLTg3IDYxLTQ4IDgwLTYzIDE1MC0xMjQgMTItMTAgMjItMjYgMjItMzRzMTEtMTcgMjUtMjFjMTQtMyAzMC0xNSAzNi0yNiA3LTE0IDE0LTE3IDIxLTEwIDExIDExIDE2OC0xMDIgMjE2LTE1NSAxMi0xMyAyMi0yMSAyMi0xNyAwIDMgNyAxIDE1LTYgMTAtOCAxOS05IDI4LTMgMTY0IDEyOSAyMzkgMTgzIDI0NyAxNzggNi00IDIzIDcgMzkgMjRzMzYgMzEgNDQgMzFjOSAwIDE4IDggMjIgMTkgMyAxMCA1NyA1OCAxMjAgMTA3bDExNCA4OXY1NjhjMSAzODUgNCA1NjcgMTEgNTY3IDYgMCAzMC0xOCA1My0zOWw0Mi00MC0yLTU1Ny0yLTU1OC0zMi0yNWMtMTgtMTQtNzQtNTYtMTI0LTk0LTE1NS0xMTYtMTQ2LTEwNC0xNDQtMTkyIDEtNDEgNi03NCAxMC03MyAxOCA2IDQzMSAzMzEgNDM0IDM0MiAyIDYgNSAxMzEgNyAyNzhsMyAyNjYtMjYgMTZjLTU5IDM1LTYzIDEyNC04IDE3MCAzNSAzMCA3NiAzMyAxMTkgMTEgMzgtMTkgNTAtNDMgNTAtOTYgMC0zNS02LTQ3LTM1LTc1bC0zNS0zM3YtNTUybC0yNS0yN2MtMTQtMTUtMjUtMjMtMjUtMThzLTEwLTMtMjEtMThjLTEyLTE1LTIzLTI1LTI1LTIzcy0yMS0xMS00MS0yOWMtNTQtNDgtNDE0LTMyNS00MzAtMzMxLTEwLTQtMTMgMTItMTMgNzEgMCA5MiAxMiA5Ny0xNTUtNjFsLTExOC0xMTEtMi0yMjFjLTItMjIwLTItMjIwLTI4LTI2MC0xNi0yNC0zMi0zOC00MC0zNS03IDItMjMgMjUtMzUgNTAtMjEgNDEtMjIgNTktMjIgMjU3djIxMmwtODcgODFjLTE2MSAxNDctMTgwIDE2NC0xODcgMTY0LTMgMC02LTM0LTYtNzVzLTMtNzUtNi03NWMtNiAwLTM1OCAyNjktNTA2IDM4N2wtNjggNTR2NTY5bC0yMyAxNWMtNTcgMzctNjIgMTEyLTEzIDE2MSA3MiA3MiAxNzYgMjMgMTc2LTgzIDAtMjgtOC00My0zNS02OWwtMzUtMzN2LTUzNWw0NC00MWMyNC0yMiA0Ni00MCA0OC00MHM4MS02MCAxNzYtMTMyYzk0LTczIDE3NC0xMzMgMTc3LTEzM3M1IDI2IDUgNTdjMCAzOCA1IDYyIDE2IDc1IDE2IDE2IDE1IDE4LTIgMjUtMTEgMy03MyA0OS0xMzkgMTAxLTY1IDUyLTEyOSA5OS0xNDEgMTA0LTEyIDYtMjUgMjAtMjggMzItMyAxMS02IDI2NC02IDU2MXY1MzlsNDIgNDNjMjMgMjQgNDUgNDMgNDkgNDNzMTEtMzUgMTQtNzdtLTMxNC00NzBjLTI4LTE5LTI4LTY4LTEtODMgNDMtMjMgODggMTcgNzEgNjMtMTIgMzAtNDMgMzktNzAgMjBtMTc3MCAwYy0zMC0yMC0yOC03MCAzLTg0IDQ1LTIxIDkwIDI2IDY3IDY5LTE0IDI2LTQ1IDMzLTcwIDE1TTQwNSAyMjMwYzE2MC0yODAgMTg1LTMyMSAxODUtMzA1IDEgNiA4IDEgMTgtMTEgOS0xMSAyMi0yMSAyNy0yMiA2LTEgMzEtMjAgNTgtNDJsNDctNDF2LTc5OGwtMTUyLTMtMTUzLTMgMTA1LTg3YzU4LTQ3IDI1MS0yMDYgNDMwLTM1M3MzNTItMjkxIDM4NS0zMTkgNjgtNTcgNzgtNjVjMTYtMTMgMTcgMjIgMTcgNjkydjcwNmwtMjI1IDE3NS0yMjUgMTc1LTItNDI1LTMtNDI0LTM3IDMwLTM4IDMxLTIgNDI3LTMgNDI3LTEwMCA3OGMtMTY5IDEzMi01NDggNDIyLTU1NiA0MjUtNSAyIDYxLTExOSAxNDYtMjY4bTg3MC03MDMgNDUtNDRWOTgzYzAtMjc1LTMtNTAzLTctNTA2LTctOC00MiAxMy04NCA1MWwtMjkgMjV2NTA5YzAgNTcxLTUgNTQxIDc1IDQ2NW0yMDQ2IDgwM2MtMTIyLTkzLTIyMS0xNjctMjIxLTE2MyAwIDMtOS01LTIwLTE4LTEwLTEzLTE5LTIwLTIwLTE1IDAgNC05LTItMjAtMTUtMTAtMTMtMTktMjAtMjAtMTUgMCA0LTktMi0yMC0xNS0xMC0xMy0xOS0yMS0yMC0xOCAwIDMtMTktMTEtNDItMzNsLTQyLTM4LTIzIDIyYy0xMyAxMi0yMyAxNy0yMyAxMXM3LTE2IDE1LTIzYzEzLTExIDE1LTcyIDE1LTQzOXYtNDI3bC0zMy0zMmMtMTgtMTgtMzYtMzItNDAtMzJzLTcgMTg4LTcgNDE4LTMgNDIyLTYgNDI1Yy00IDMtMTYtNS0yNi0xOS0xMS0xNC0yMi0yMy0yNC0yMXMtMjMtMTMtNDUtMzRjLTIzLTIxLTQ2LTM2LTUwLTMzLTUgMy05IDEtOS00cy02NS02MC0xNDUtMTIybC0xNDUtMTEzVjg3MmMwLTY5MCAwLTcwNCAxOS02OTEgMTAgOCA4NiA3MCAxNjggMTM5czMwMyAyNTEgNDkwIDQwNWwzNDAgMjgwLTE1MyAzLTE1NCAzdjc5OWw5OCA3OGM1MyA0MyA5OCA4NCAxMDAgOTEgMSA3IDQ4IDkyIDEwNCAxODkgMTMxIDIzMSAxODcgMzMyIDE4MyAzMzItMiAwLTEwMy03Ni0yMjQtMTcwbS03MTQtMTI3MyAxLTUwNy01MC00MGMtMjgtMjItNTQtMzctNTktMzRzLTkgMjI4LTkgNTEwdjUwNGw0MyA0MGM3NiA3MiA3MiA5NyA3NC00NzMiLz48L2c+PGcgaWQ9ImFjY2VudC1sYXllciIgZmlsbD0idXJsKCNhY2NlbnRHcmFkKSI+PHBhdGggZD0ibTEyNDIgMzQ4Ny00Mi00M3YtNTM5YzAtMjk3IDMtNTUwIDYtNTYxIDMtMTIgMTYtMjYgMjgtMzIgMTItNSA3Ni01MiAxNDEtMTA0IDY2LTUyIDEyOC05NyAxMzgtMTAxIDktMyAxNy0xNSAxNy0yNiAwLTQyIDMzLTk3IDgzLTE0MCAyOS0yNSA5MS04MSAxNDAtMTI1bDg3LTgxdi0yMTJjMC0xOTggMS0yMTYgMjItMjU3IDEyLTI1IDI4LTQ4IDM1LTUwIDgtMyAyNCAxMiA0MCAzNSAyNiAzOSAyNyA0NyAyNiAxNTMtMSA2MSAxIDE2MSA0IDIyM2w1IDExMSAxNDQgMTM0YzE0MSAxMzAgMTQ0IDEzNCAxNDQgMTc1IDAgNTUgOCA3MyAzMSA3M3M3NiAzNSAyMTAgMTM4bDk2IDc0IDQgMjI2YzMgMTI1IDUgMzc3IDQgNTYwdjMzM2wtNDIgNDBjLTIzIDIxLTQ3IDM5LTUzIDM5LTcgMC0xMC0xODItMTEtNTY3di01NjhsLTExNC04OWMtNjMtNDktMTE3LTk3LTEyMC0xMDctNC0xMS0xMy0xOS0yMS0xOS03IDAtNjctNTQtMTMxLTEyMS0xMTAtMTEyLTE2MC0xNDktMjAyLTE0OS01MyAwLTIwMCAxMDUtMjcxIDE5NC0yNCAzMC01NCA1Ny02NyA2MS0xMyAzLTIzIDEyLTIzIDIwcy0xMCAyNC0yMiAzNGMtNzAgNjEtODkgNzYtMTUwIDEyNC01NSA0My02NyA1OC03MSA4Ny0zIDE5LTIgMjQwIDEgNDkxIDQgNDI5IDAgNjA5LTE3IDYwOS00IDAtMjYtMTktNDktNDNtNDE1LTQ5MWMtNC0xMC03LTEyOC03LTI2MnYtMjQ0bDI2LTIzYzE1LTEyIDMyLTI2IDM4LTMyIDYtNSAzNi0yOSA2Ny01MiA1My00MSA3OS01MiA3OS0zNSAwIDQgMSA4NCAzIDE3N2wyIDE3MC03MiAxMTljLTQwIDY1LTczIDEyMi03MyAxMjUgMCA0LTEzIDIyLTI4IDQxLTI1IDI5LTI5IDMxLTM1IDE2bTQyNi03MmMtMzItNDktNzgtMTIxLTEwMS0xNjBsLTQyLTcwdi0xNzBjMC05MyA0LTE3NSA5LTE4MiA2LTEwIDI3IDEgODcgNDYgMTI4IDk3IDExNyA2NiAxMjEgMzQ4IDIgMTM1LTEgMjUzLTYgMjYxLTcgMTMtMjItNC02OC03M20xMzIyIDY1Yy0xMDQtMjEtMTQzLTI5LTE4Mi0zNWwtNDMtN3YtMjc3YzAtMzAwIDItMzEwIDUxLTI5MSA2NyAyNSA4MyA4NCA3NCAyNjZsLTcgMTQyIDYwIDY5YzMzIDM4IDcxIDgwIDg2IDkzIDI3IDI2IDM1IDUyIDE0IDUwLTctMS0zMS01LTUzLTEwbS0zMDY1LThjMC00IDM2LTQ3IDgwLTk0bDgwLTg1di0xNjRjMC0xODggOS0yMTkgNzMtMjUzIDMzLTE3IDM5LTE4IDQ3LTUgNiA5IDkgMTI1IDcgMjg5bC0yIDI3NS02NSAxM2MtMzYgNy04NCAxNy0xMDggMjMtNTIgMTItMTEyIDEzLTExMiAxbTE2MC0xNDE5di0zMTlsLTg2LTc3Yy00Ny00Mi05NS04My0xMDUtODktMTAtNy0xOS0xOC0xOS0yNiAwLTE1IDY3LTEyIDE3NSA4IDI4IDUgNzAgMTMgOTUgMTdzNTEgMTEgNTggMTdjOSA3IDEyIDkxIDEyIDM1N3YzNDhsLTQ5IDQxYy04NSA3MS04MSA4NS04MS0yNzdtMjczMiAyNzYtNTItNDN2LTM0NmMwLTI2NSAzLTM0OSAxMy0zNTcgNi01IDMwLTEzIDUyLTE2IDIyLTQgNjUtMTEgOTUtMTYgMTc5LTMyIDIwMy0yMyAxMTkgNDktMzAgMjUtNzYgNjYtMTAzIDkybC00OSA0NS0xIDMxNGMtMSAyMTktNCAzMTQtMTIgMzE3LTYgMi0zNC0xNi02Mi0zOW0tMjAzMi03NzZWNTUzbDI5LTI1YzQyLTM4IDc3LTU5IDg0LTUxIDQgMyA3IDIzMSA3IDUwNnY1MDBsLTQ1IDQ0Yy04MCA3Ni03NSAxMDYtNzUtNDY1bTEzMzMgNDY4LTQzLTQwVjk4NmMwLTI4MiA0LTUwNyA5LTUxMHMzMSAxMiA1OSAzNGw1MCA0MC0xIDUwN2MtMiA1NzAgMiA1NDUtNzQgNDczbS04ODMtNDM3YzAtODAgNC0xMTYgMTYtMTM4IDktMTYgNTEtOTcgOTQtMTgwIDkzLTE4MiAxMzItMjQ4IDE0NS0yNDggNiAwIDI0IDI3IDQxIDU5czUyIDk3IDc3IDE0NGMxMjYgMjI4IDEyNiAyMjkgMTMzIDM0OCAxMCAxNTggNCAxNTctMTI3LTEzLTM4LTQ5LTgxLTEwNS05Ny0xMjRsLTI4LTMzLTUxIDU4Yy0yNyAzMy02NyA4NC04OCAxMTQtNDUgNjYtNzQgOTgtOTcgMTExLTE3IDktMTggMi0xOC05OCIvPjwvZz48ZyBpZD0iaGlnaGxpZ2h0LWxheWVyIiBmaWxsPSJ1cmwoI2hpZ2hsaWdodEdyYWQpIj48cGF0aCBkPSJNMTQwOCAzOTI4Yy02OC01Ni0xOTctMTY2LTI4OC0yNDNsLTE2NS0xNDF2LTQ1YzAtNDMtMS00NC0zNC00Ny0xOS0yLTM3IDEtNDEgOC04IDEzLTkgMTItMjQ1LTE4NC0yMzItMTkzLTMxNS0yNjYtMzE1LTI3NyAwLTUgMjAtOSA0NS05czY0LTUgODctMTBjMjQtNiA3Mi0xNiAxMDgtMjNsNjUtMTMgMy0yNjVjMy0yNzUgMC0zMDktMjItMzA5LTcgMC0yOCAxMC00NyAyMy0xOSAxMi01MSAyOC03MiAzNS0yMSA4LTk1IDU3LTE2NSAxMDktMTUzIDExNS0yNzIgMTk3LTI3MiAxODYgMC00IDEyLTI4IDI2LTUzIDE1LTI1IDY0LTExMiAxMDktMTk1IDQ2LTgyIDEyNi0yMjQgMTgwLTMxNSA1My05MSAxMDktMTkxIDEyMy0yMjIgMTUtMzIgMzEtNTggMzUtNTggNSAwIDMxLTE4IDU4LTQxbDQ5LTQxdi0zNDhjMC0yNjYtMy0zNTAtMTItMzU3LTctNi0zMy0xMy01OC0xN3MtNjctMTItOTUtMTdjLTI3LTUtNzYtMTItMTA3LTE1LTMyLTQtNTgtMTAtNTctMTMgMC0zIDY2LTYwIDE0Ni0xMjYgODEtNjYgMTc4LTE0NyAyMTctMTgwIDM5LTM0IDEyMC0xMDEgMTgxLTE1MCAyMDMtMTY2IDQzOS0zNjIgNTk1LTQ5M2w5NS04MCAzIDU0OSAyIDU0OWgzNGMzMiAwIDM2LTQgNTMtNDhsMTgtNDcgNiAxMTBjNCA2MSA3IDE4NCA4IDI3NWwxIDE2Ni0xNzcgMTM2Yy05OCA3NS0xODEgMTM2LTE4NSAxMzUtMy0xLTE2IDExLTI4IDI2cy0yNSAyNi0yNyAyM2MtMy0zLTE0IDUtMjQgMTdzLTE4IDE5LTE5IDE2YzAtMy0xOSAxMS00MiAzMy0yMyAyMS00MyAzNi00NiAzMy0zLTItMTQgNy0yNCAyMS0xMSAxNC0yMyAyMy0yNSAyMC0zLTMtMTQgNS0yNCAxN3MtMTggMTgtMTkgMTNjMC01LTEwIDMtMjEgMTgtMTIgMTUtMjQgMjUtMjYgMjItMy0zLTE0IDUtMjQgMTdzLTE4IDE4LTE5IDEzYzAtNC05IDItMjAgMTUtMTAgMTMtMTkgMjAtMjAgMTUgMC01LTEwIDMtMjEgMTgtMTIgMTUtMjQgMjUtMjYgMjItMy0zLTE0IDYtMjUgMTktMTEgMTQtMjMgMjMtMjggMjAtNC0zLTExIDItMTQgMTEtMyA4LTEwIDEyLTE2IDktNS0zLTExLTUtMTItM3MtNSAxNzktOCAzOTNsLTUgMzkwLTE0MiAzLTE0MyAzIDE4OCAxNTZjMTAzIDg2IDI5NyAyNDkgNDMyIDM2MnMyNzIgMjI5IDMwNiAyNTggNjQgNTMgNjggNTNjMyAwIDYtMzAxIDYtNjY5IDAtNTM1IDMtNjcxIDEzLTY3OSAxMC05IDEyLTQgOSAyNC01IDQxIDExIDY0IDQ0IDY0aDI0djcxNWMwIDM5My0yIDcxNS00IDcxNS0zIDAtNjAtNDYtMTI4LTEwMk00OTEgMjMyM2MxMjMtOTUgMjY5LTIwNyAzMjQtMjUwbDEwMC03OCAzLTQyNyAyLTQyNyAzOC0zMSAzNy0zMCAzIDQyNCAyIDQyNSAyMjUtMTc1IDIyNS0xNzVWODczYzAtNjcwLTEtNzA1LTE3LTY5Mi0xMCA4LTQ1IDM3LTc4IDY1cy0yMDYgMTcyLTM4NSAzMTktMzcyIDMwNi00MzAgMzUzbC0xMDUgODcgMTUzIDMgMTUyIDN2Nzk4bC00NyA0MWMtMjcgMjItNTIgNDEtNTggNDItNSAxLTE4IDExLTI3IDIyLTEwIDEyLTE3IDE3LTE4IDExIDAtNS03IDAtMTUgMTItMjkgNDItMzI0IDU2NC0zMTYgNTYxIDQtMiAxMDgtODAgMjMyLTE3NW0xNzcwIDEwOTBjMC02MDYgNS03MjMgMjctNzMxIDYtMiAxNi0xOSAyMi0zOHMxNi0zNCAyMS0zNCA5LTE5IDktNDJjMC0zNy01LTQ4LTM3LTc2bC0zOC0zNCA0MyAzMiA0MiAzMnYxMzQ5bDEwMy04N2M1Ni00OCAyNDgtMjA5IDQyNi0zNTggMTc5LTE0OSAzNTItMjk0IDM4NS0zMjIgMTAxLTg0IDEwNC04MC01Ny03OWgtMTQybC01LTM4MS01LTM4MS00MTUtMzIzYy0yMjgtMTc3LTQzNC0zMzYtNDU4LTM1M2wtNDMtMzEgNi0xODBjMy0xMDAgNi0yMjAgOC0yNjggMi05MSA4LTEwMCAyNy00MyAxMCAzMSAxNiAzNSA0NiAzNWgzNFYtMmwzOCAzMGMyMCAxNyA3NiA2MyAxMjMgMTAzIDQ3IDQxIDE3MSAxNDQgMjc0IDIyOSAxMDQgODUgMjI3IDE4NyAyNzQgMjI2IDE4OCAxNTQgNDg5IDQwMSA1MjYgNDMxIDIyIDE3IDM3IDM1IDMzIDM5cy0xNCAxLTIzLTZjLTE1LTEzLTQ5LTExLTE2NSAxMC0zMCA1LTczIDEyLTk1IDE2LTIyIDMtNDYgMTEtNTIgMTYtMTAgOC0xMyA5Mi0xMyAzNTd2MzQ2bDUxIDQzYzI4IDIzIDU1IDQyIDYwIDQyczkgOSA5IDIwIDI0IDYxIDUzIDExMGMxNDggMjU2IDQwMCA3MTAgMzk1IDcxNXMtMjE0LTE0NS0zMzAtMjM2Yy01My00MS05OC02OS0xMTItNjktMTMgMC0zMC03LTM3LTE2cy0yNC0yMC0zNy0yNWMtNTAtMTktNTItMTAtNTIgMjkwdjI3N2w3OCAxM2M0MiA3IDkxIDE3IDEwNyAyMiAxNyA1IDUyIDEyIDc4IDE2bDQ4IDgtMTYzIDEzNmMtOTAgNzYtMjA2IDE3Mi0yNTggMjE1LTUyIDQ0LTE4OSAxNjAtMzA1IDI1OS0yNjQgMjI2LTQ4MyA0MDktNDk2IDQxMy01IDItOS0yMzUtOC02MTVtMTI0NS05OTBjLTI0LTQzLTg5LTE1OC0xNDQtMjU1LTU2LTk3LTEwMy0xODItMTA0LTE4OS0yLTctNDctNDgtMTAwLTkxbC05OC03OHYtNzk5bDE1NC0zIDE1My0zLTM0MC0yODBjLTE4Ny0xNTQtNDA4LTMzNi00OTAtNDA1cy0xNTgtMTMxLTE2OC0xMzljLTE5LTEzLTE5IDEtMTkgNjkxdjcwNWwxNDUgMTEzYzgwIDYyIDE0NSAxMTcgMTQ1IDEyMnM0IDcgOSA0YzQtMyAyNyAxMiA1MCAzMyAyMiAyMSA0MyAzNiA0NSAzNHMxMyA3IDI0IDIxYzEwIDE0IDIyIDIyIDI2IDE5IDMtMyA2LTE5NSA2LTQyNXMzLTQxOCA3LTQxOCAyMiAxNCA0MCAzMmwzMyAzMnY0MjdjMCAzNjctMiA0MjgtMTUgNDM5LTggNy0xNSAxNy0xNSAyM3MxMCAxIDIzLTExbDIzLTIyIDQyIDM4YzIzIDIyIDQyIDM2IDQyIDMzIDEtMyAxMCA1IDIwIDE4IDExIDEzIDIwIDE5IDIwIDE1IDEtNSAxMCAyIDIwIDE1IDExIDEzIDIwIDE5IDIwIDE1IDEtNSAxMCAyIDIwIDE1IDExIDEzIDIwIDIxIDIwIDE4IDAtNCA5OSA3MCAyMjEgMTYzIDEyMSA5NCAyMjIgMTcwIDIyNCAxNzBzLTE2LTM1LTM5LTc3TTk0NCAzMDE2Yy00OS00OS00NC0xMjQgMTMtMTYxbDIzLTE1di01NjlsNjgtNTRjMTQ4LTExOCA1MDAtMzg3IDUwNi0zODcgMTQgMCA1IDE1Ny0xMyAyMDctMjMgNjctNDEgNTQtNDEtMjkgMC0zMi0yLTU4LTUtNThzLTgzIDYwLTE3NyAxMzNjLTk1IDcyLTE3NCAxMzItMTc2IDEzMnMtMjQgMTgtNDggNDBsLTQ0IDQxdjUzNWwzNSAzM2MyNyAyNiAzNSA0MSAzNSA2OSAwIDQ4LTE2IDgwLTUwIDEwMC00NiAyOC04NyAyMi0xMjYtMTdtMTE3LTUzYzE3LTQ2LTI4LTg2LTcxLTYzLTI3IDE1LTI3IDY0IDEgODMgMjcgMTkgNTggMTAgNzAtMjBtMTY2MCA2MWMtNTUtNDYtNTEtMTM1IDgtMTcwbDI2LTE2LTMtMjY2Yy0yLTE0Ny01LTI3Mi03LTI3OC0zLTExLTQxNi0zMzYtNDM1LTM0Mi01LTItOCAzNC03IDgyIDIgNzQgMCA4Ni0xNCA4Ni0yMSAwLTI5LTIwLTI5LTc1IDAtMjQtNC00Ny0xMC01MC01LTMtMTAtNDItMTAtODcgMC02MiAzLTc5IDEzLTc1IDE2IDYgMzc2IDI4MyA0MzAgMzMxIDIwIDE4IDM5IDMxIDQxIDI5czEzIDggMjUgMjNjMTEgMTUgMjEgMjMgMjEgMThzMTEgMyAyNSAxOGwyNSAyN3Y1NTJsMzUgMzNjMjkgMjggMzUgNDAgMzUgNzUgMCA1My0xMiA3Ny01MCA5Ni00MyAyMi04NCAxOS0xMTktMTFtMTEwLTU2YzIzLTQzLTIyLTkwLTY3LTY5LTE3IDgtMjQgMTktMjQgNDAgMCA1NCA2NiA3NSA5MSAyOW0tMTI2MS01MzFjMC0zIDE4LTIwIDQwLTM3czQwLTI5IDQwLTI3YzAgMy0xOCAyMC00MCAzN3MtNDAgMjktNDAgMjdtMjk3LTIzOWMxOC0yMCAyOC0yNCAxOC04LTMgNiA0IDEwIDE2IDEwIDE5IDAgMjAtMiA4LTE3LTctMTAtMS03IDE0IDYgMTUgMTQgMjcgMjUgMjcgMjUgMCAxLTIyIDEtNDkgMS00NyAwLTQ5LTEtMzQtMTdtLTIzMi02OGMtMjItMzYgMjA4LTIyMCAyNzYtMjIwIDM5IDAgODkgMzUgMTcyIDExOSAxNDggMTUxIDkyIDEyNC0xNzAtODItOS02LTE4LTUtMjggMy04IDctMTUgOS0xNSA2IDAtNC0xMCA0LTIyIDE3LTQxIDQ1LTIwNyAxNjctMjEzIDE1NyIvPjwvZz48L2c+PC9zdmc+";

const EMBLEM_DATA_URI = `data:image/svg+xml;base64,${EMBLEM_SVG_BASE64}`;

interface IntroLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function IntroLoader({
  onComplete,
  duration = 2200,
}: IntroLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [phase, setPhase] = useState<"tracing" | "blooming" | "pop" | "sweep" | "settle" | "exit">("tracing");

  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const completedRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    setPercent(100);
    setIsDone(true);
    setPhase("blooming");

    // Smooth choreographed climax sequence
    const t1 = setTimeout(() => setPhase("pop"), 120);
    const t2 = setTimeout(() => setPhase("sweep"), 320);
    const t3 = setTimeout(() => setPhase("settle"), 850);
    const t4 = setTimeout(() => {
      setPhase("exit");
      setIsExiting(true);
      if (onComplete) {
        onComplete();
      }
    }, 1350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  // Lock scroll while intro is visible
  useEffect(() => {
    if (!isExiting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExiting]);

  // Smooth animation frame loop with cubic easing
  useEffect(() => {
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const frame = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutCubic(progress);
      const currentPercent = Math.min(100, Math.round(easedProgress * 100));

      setPercent(currentPercent);

      if (pathRef.current) {
        const offset = 1000 * (1 - easedProgress);
        pathRef.current.style.strokeDashoffset = `${offset}`;
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        handleFinish();
      }
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [duration, handleFinish]);

  const strokeDashOffset = 1000 * (1 - percent / 100);

  return (
    <AnimatePresence mode="wait">
      {!isExiting && (
        <motion.div
          key="portfolio-intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden font-sans"
          style={{
            background:
              "radial-gradient(ellipse at 50% 44%, #2e130a 0%, #0a0402 60%, #000000 100%)",
          }}
        >
          {/* Subtle Ambient Radial Glowing Aura */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div
              className={`w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full transition-all duration-1000 ease-out ${
                isDone
                  ? "bg-gradient-to-tr from-amber-600/35 via-orange-500/25 to-transparent blur-[120px] scale-125"
                  : "bg-orange-600/15 blur-[90px] scale-100"
              }`}
            />
            <div className="absolute w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] rounded-full bg-amber-400/10 blur-[60px]" />
          </div>

          {/* Floating Subtle Ambient Dust Embers */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <span
              className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-orange-400/80 blur-[0.5px] animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <span
              className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-amber-300/70 blur-[0.5px] animate-pulse"
              style={{ animationDuration: "2.4s" }}
            />
            <span
              className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-orange-500/60 blur-[0.5px] animate-pulse"
              style={{ animationDuration: "3.6s" }}
            />
            <span
              className="absolute bottom-1/4 right-1/5 w-1 h-1 rounded-full bg-yellow-200/50 blur-[0.5px] animate-pulse"
              style={{ animationDuration: "2.8s" }}
            />
          </div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            onClick={handleFinish}
            className="absolute top-6 right-6 z-50 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#f7ecdd]/60 hover:text-[#f7ecdd] px-4 py-1.5 rounded-full border border-[#f7ecdd]/20 bg-[#0a0402]/60 hover:border-amber-400/60 hover:shadow-[0_0_16px_rgba(255,157,46,0.35)] backdrop-blur-md transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Skip loader animation"
          >
            Skip
          </motion.button>

          {/* Center Stage: Emblem and Progress */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Stage Container */}
            <div className="relative w-[280px] h-[297px] sm:w-[323px] sm:h-[343px] mb-6 flex items-center justify-center">
              {/* Radial Backdrop Glow inside stage */}
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] rounded-full pointer-events-none transition-opacity duration-700 ${
                  isDone ? "opacity-100" : "opacity-80"
                }`}
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,157,46,0.22) 0%, rgba(255,157,46,0.08) 38%, rgba(255,157,46,0) 70%)",
                }}
              />

              {/* Emblem Wrap with Pop / Settle Spring scale */}
              <div
                className={`relative w-full h-full transition-transform duration-500 ease-out origin-center ${
                  phase === "pop" || phase === "sweep" || phase === "settle"
                    ? "scale-100"
                    : "scale-[0.96]"
                }`}
              >
                {/* 1. Ambient Glow Bloom Layer */}
                <div
                  className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-700 ease-out ${
                    phase === "blooming" || phase === "pop" || phase === "sweep"
                      ? "opacity-60 blur-[8px] scale-105"
                      : "opacity-0 blur-[4px] scale-100"
                  }`}
                  style={{
                    backgroundImage: `url("${EMBLEM_DATA_URI}")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter:
                      "blur(8px) saturate(160%) drop-shadow(0 0 18px rgba(255,157,46,0.75))",
                  }}
                />

                {/* 2. Full Color Vector Raster / Emblem Layer */}
                <div
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-out ${
                    isDone ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url("${EMBLEM_DATA_URI}")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: "drop-shadow(0 4px 20px rgba(242,97,12,0.25))",
                  }}
                />

                {/* 3. Laser Stroke Trace SVG Layer */}
                <svg
                  className={`absolute inset-0 w-full h-full overflow-visible transition-opacity duration-300 ease-out ${
                    isDone ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                  viewBox="0 0 323 343"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    filter:
                      "drop-shadow(0 0 3px #ffd28a) drop-shadow(0 0 10px rgba(255,180,70,0.8))",
                  }}
                >
                  <path
                    ref={pathRef}
                    d="M130.0,0.0 L27.6,86.3 L44.6,137.7 L4.2,110.9 L43.8,181.9 L24.6,253.3 L130.0,342.1 L130.5,249.0 L161.9,297.5 L191.7,248.6 L192.5,342.1 L299.6,253.3 L279.6,182.3 L318.3,110.9 L279.2,136.8 L296.2,86.7 L192.5,0.0 L198.9,125.4 L157.7,154.7 L125.0,129.2 Z"
                    pathLength={1000}
                    fill="none"
                    stroke="#ffd28a"
                    strokeWidth="2.8"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset={strokeDashOffset}
                  />
                </svg>

                {/* 4. Light Shimmer / Specular Sweep Layer */}
                <div
                  className={`absolute inset-0 w-full h-full pointer-events-none mix-blend-screen transition-all duration-700 ease-in-out ${
                    phase === "sweep"
                      ? "opacity-90 [background-position:135%_0]"
                      : "opacity-0 [background-position:-75%_0]"
                  }`}
                  style={{
                    WebkitMaskImage: `url("${EMBLEM_DATA_URI}")`,
                    maskImage: `url("${EMBLEM_DATA_URI}")`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    background:
                      "linear-gradient(105deg, transparent 42%, rgba(255,244,222,0.95) 49.5%, rgba(255,225,180,0.95) 50.5%, transparent 58%)",
                    backgroundSize: "320% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>

            {/* Loading Label */}
            <div className="text-[11px] font-semibold tracking-[0.34em] uppercase text-[#f7ecdd]/55 mb-2.5">
              {isDone ? "WELCOME" : "LOADING"}
            </div>

            {/* Percentage Number */}
            <div
              className="font-mono text-3xl sm:text-4xl font-semibold tracking-wider text-[#f7ecdd] min-w-[100px] text-center"
              style={{
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 0 20px rgba(255,157,46,0.45)",
              }}
            >
              {percent}%
            </div>

            {/* Glowing Minimal Progress Track */}
            <div className="w-40 sm:w-44 h-[2.5px] bg-[#f7ecdd]/15 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-75 ease-out"
                style={{
                  width: `${percent}%`,
                  background: "linear-gradient(90deg, #ff9d2e, #ffd28a)",
                  boxShadow: "0 0 10px rgba(255,157,46,0.75)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
