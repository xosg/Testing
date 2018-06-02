from PIL import Image
import os

if __name__ == '__main__':
    imgWm=Image.open('watermark.png')
    x=os.listdir('background/')
    imgWm=imgWm.resize((150,150))
    for i in x:
        if i==x[0]:
            continue
        imgBg=Image.open('background/'+i)
        r,g,b,a=imgWm.split()
        imgBg.paste(imgWm,(0,0),mask=a)
        imgBg.save('output/'+i+'.png')
