import os
from lavague.core import WorldModel, ActionEngine
from lavague.core.agents import WebAgent
from lavague.drivers.selenium import SeleniumDriver
from dotenv import load_dotenv
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

load_dotenv()

EMAIL = os.getenv("ON_DEMAND_EMAIL") 
PASSWORD = os.getenv("ON_DEMAND_PASSWORD")  

if not EMAIL or not PASSWORD:
    raise EnvironmentError("ON_DEMAND_EMAIL or ON_DEMAND_PASSWORD not set in environment variables!")

selenium_driver = SeleniumDriver(headless=False)

selenium_driver.driver.get("https://dev.on-demand.io/auth/login")

try:
    email_field = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Enter email']"))
    )
    email_field.send_keys(EMAIL)

    continue_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[@type='submit']"))
    )
    continue_button.click()

    password_field = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@type='password']"))
    )
    password_field.send_keys(PASSWORD)

    continue_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[@type='submit']"))
    )
    continue_button.click()

    time.sleep(2)

    selenium_driver.driver.get("https://dev.on-demand.io/playground")
    print("Login successful! Navigated to the playground page.")

except Exception as e:
    print("An error occurred during login:", e)

try:
    skip_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'cursor-pointer') and text()='Skip']"))
    )
    skip_button.click()
    print("Clicked 'Skip' button successfully.")
except Exception as e:
    print("An error occurred while trying to click 'Skip':", e)

try:
    manage_presets_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Manage Presets']"))
    )
    manage_presets_button.click()
    print("Clicked 'Manage Presets' button successfully.")
except Exception as e:
    print("An error occurred while trying to click 'Manage Presets':", e)

try:
    select_preset_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Select Preset']"))
    )
    select_preset_button.click()
    print("Clicked 'Select Preset' button successfully.")
except Exception as e:
    print("An error occurred while trying to click 'Select Presets':", e)

try:
    target_li = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.ID, "selector_element_664e83c2b9e754230e58d56b"))
    )

    target_li.click()
    print("Clicked on the <li> element with the specified id.")
except Exception as e:
    print("An error occurred while selecting the <li> element:", e)

try:
    textarea = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "textarea"))
    )
    textarea.clear()  
    textarea.send_keys("What is the predicted oil production for the year 2030 in the UAE?")
    print("Text entered into the textarea.")
    time.sleep(1)

    run_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), ' Run')]"))
    )
    run_button.click()
    print("Clicked the ' Run' button.")
    time.sleep(13)
    first_download_logs_span = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "(//span[contains(text(), 'Download Logs')])[1]"))
    )
    first_download_logs_span.click()
    print("Clicked the first 'Download Logs' span.")
    time.sleep(1)
except Exception as e:
    print("An error occurred:", e)

try:
    select_preset_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='nav-oryx']"))
    )
    select_preset_button.click()
    print("Clicked 'Select Preset' button successfully.")
except Exception as e:
    print("An error occurred while trying to click 'Select Presets':", e)

try:
    target_li = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.ID, "selector_element_664e7e60b9e754230e58d56a"))
    )

    target_li.click()
    print("Clicked on the <li> element with the specified id.")
except Exception as e:
    print("An error occurred while selecting the <li> element:", e)

try:
    textarea = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "textarea"))
    )
    textarea.clear()  
    textarea.send_keys("Fetch challan details of vehicle number UP16CD1996")
    print("Text entered into the textarea.")
    time.sleep(1)

    run_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), ' Run')]"))
    )
    run_button.click()
    print("Clicked the ' Run' button.")
    time.sleep(17)
    second_download_logs_span = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "(//span[contains(text(), 'Download Logs')])[2]"))
    )
    second_download_logs_span.click()
    print("Clicked the second 'Download Logs' span.")
    time.sleep(1)
except Exception as e:
    print("An error occurred:", e)

try:
    select_preset_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='nav-rto-preset']"))
    )
    select_preset_button.click()
    print("Clicked 'Select Preset' button successfully.")
except Exception as e:
    print("An error occurred while trying to click 'Select Presets':", e)

try:
    target_li = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.ID, "selector_element_664eea34b9e754230e58d57b"))
    )

    target_li.click()
    print("Clicked on the <li> element with the specified id.")
except Exception as e:
    print("An error occurred while selecting the <li> element:", e)

try:
    textarea = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "textarea"))
    )
    textarea.clear()  
    textarea.send_keys('send mail to abc@gmail.com with body "sample body" and subject: "sample title"')
    print("Text entered into the textarea.")
    time.sleep(1)

    run_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), ' Run')]"))
    )
    run_button.click()
    print("Clicked the ' Run' button.")
    time.sleep(15)
    third_download_logs_span = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "(//span[contains(text(), 'Download Logs')])[3]"))
    )
    third_download_logs_span.click()
    print("Clicked the third 'Download Logs' span.")
except Exception as e:
    print("An error occurred:", e)



try:
    select_preset_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='nav-stock-2']"))
    )
    select_preset_button.click()
    print("Clicked 'Select Preset' button successfully.")
except Exception as e:
    print("An error occurred while trying to click 'Select Presets':", e)

try:
    target_li = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.ID, "selector_element_6653b2466bd43501cbe6df78"))
    )

    target_li.click()
    print("Clicked on the <li> element with the specified id.")
except Exception as e:
    print("An error occurred while selecting the <li> element:", e)

try:
    textarea = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "textarea"))
    )
    textarea.clear()  
    textarea.send_keys("Send a message 'How are you bro' to the phone number '+919334591820'")
    print("Text entered into the textarea.")
    time.sleep(1)

    run_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), ' Run')]"))
    )
    run_button.click()
    print("Clicked the ' Run' button.")
    time.sleep(15)
except Exception as e:
    print("An error occurred:", e)



try:
    select_preset_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='nav-zee-test']"))
    )
    select_preset_button.click()
    print("Clicked 'Select Preset' button successfully.")
except Exception as e:
    print("An error occurred while trying to click 'Select Presets':", e)

try:
    target_li = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.ID, "selector_element_6654fd1afbbaca6e66c9ea67"))
    )

    target_li.click()
    print("Clicked on the <li> element with the specified id.")
except Exception as e:
    print("An error occurred while selecting the <li> element:", e)

try:
    textarea = WebDriverWait(selenium_driver.driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "textarea"))
    )
    textarea.clear()  
    textarea.send_keys("Suggest me best courses for Web Development which have rating of more than 4.5 and are beginner friendly")
    print("Text entered into the textarea.")
    time.sleep(1)

    run_button = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), ' Run')]"))
    )
    run_button.click()
    print("Clicked the ' Run' button.")
    time.sleep(18)
    second_download_logs_span = WebDriverWait(selenium_driver.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "(//span[contains(text(), 'Download Logs')])[4]"))
    )
    second_download_logs_span.click()
    print("Clicked the second 'Download Logs' span.")
    time.sleep(1)
except Exception as e:
    print("An error occurred:", e)


world_model = WorldModel()
action_engine = ActionEngine(selenium_driver)
agent = WebAgent(world_model, action_engine)

agent.demo("Explore the playground functionality")
