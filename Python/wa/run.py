import pyautogui, time

position =pyautogui.position()
pesan = "test"
for a in range(10):
    pyautogui.click(position.x, position.y)
    pyautogui.typewrite(pesan)
    print(pesan)
    time.sleep(0.5)
    pyautogui.typewrite("enter")