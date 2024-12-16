import pyautogui as pag
import time

time.sleep(12)

for i in range(10):
    pag.write("test spam")
    pag.press("enter")