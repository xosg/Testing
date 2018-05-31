#coding:utf8
from selenium import webdriver
import sys,time
browser= webdriver.PhantomJS('/Users/jim001/Downloads/phantomjs-2.1.1-macosx/bin/phantomjs')
browser.get('http://www.jycinema.com/html/default/index.html')
browser.implicitly_wait(10)
list=browser.find_elements_by_class_name('film-title')
__console__=sys.stdout
sys.stdout=open('./output.txt','w')
for x in list:
    print x.text.encode('utf-8')
sys.stdout=__console__
