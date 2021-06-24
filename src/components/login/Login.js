import React from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { SaveToken } from '../../redux-src/actions';

    const defaultAvatar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAABCQWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE1LTExLTIxVDE1OjI5OjI5WjwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE1LTExLTIyVDEwOjQzOjIyKzA1OjMwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNS0xMS0yMlQxMDo0MzoyMiswNTozMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpGN0NCMjUzMzM1MjA2ODExODIyQURDNzU2MTc0RDdBNjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0xMS0yMlQwOTo0Mzo0NSswNTozMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpGOENCMjUzMzM1MjA2ODExODIyQURDNzU2MTc0RDdBNjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0xMS0yMlQwOTo0Mzo0NSswNTozMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MTA0ZTIwYzAtMmExMi00NzgzLWExMTYtYzg5NzE2MTZiOTY4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTExLTIyVDEwOjQzOjIyKzA1OjMwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+ZGVyaXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5jb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NzdmNTk0MjEtMWM0Ni00OGYzLWEwYzMtNjBjZWVhM2ZjNTE4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTExLTIyVDEwOjQzOjIyKzA1OjMwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjEwNGUyMGMwLTJhMTItNDc4My1hMTE2LWM4OTcxNjE2Yjk2ODwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpGN0NCMjUzMzM1MjA2ODExODIyQURDNzU2MTc0RDdBNjwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOkY3Q0IyNTMzMzUyMDY4MTE4MjJBREM3NTYxNzREN0E2PC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDplNzFkYWVjOS1kMTA4LTExNzgtOTU1NC1jMDUwNTIwYjZmMzE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NzdmNTk0MjEtMWM0Ni00OGYzLWEwYzMtNjBjZWVhM2ZjNTE4PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6RjdDQjI1MzMzNTIwNjgxMTgyMkFEQzc1NjE3NEQ3QTY8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PvH4Sk0AAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAJ79JREFUeNrsnXeYVeW5t++1y/QOM/QmfQAF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";

    const dispatch = useDispatch();

    async function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        };
        const response = await fetch('/login', requestOptions);
        const body = await response.json();
        if (body.message) {
            document.getElementById("incorrect").innerHTML = body.message;
        } else {
            dispatch(SaveToken(body.token));
        }
    }

    async function changeAvatar() {
        const email = document.getElementById('email').value;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'email': email
            })
        };

        const response = await fetch('/getUserDetails', requestOptions);
        const body = await response.json();
        if (body.length === 1) {
            document.getElementById("icon").setAttribute('src', body[0].avatar);
        } else {
            document.getElementById("icon").setAttribute('src', defaultAvatar);
        }
    }

    return (
        <div className="login">

            <img id="icon" src={defaultAvatar} alt="Avatar"/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" onChange={changeAvatar} placeholder="Enter Email" id="email" name="email" required/>

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="password" name="password" required/>

            <p id="incorrect"/>
            <button type="submit" onClick={login}>Create Account</button>
        </div>
    )
}