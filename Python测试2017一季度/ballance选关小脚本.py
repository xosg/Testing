# encoding: utf-8
import os
import shutil
j=input("input the number(0-57):")
i=int(j)
try:
  os.remove("D:/ballance/3D_Entities/Level/Level_01.NMO")
finally:
  x=os.listdir("D:/Ballance+/Ballance_new_maps/")
  shutil.copyfile("D:/Ballance+/Ballance_new_maps/"+x[i],"D:/ballance/3D_Entities/Level/Level_01.NMO")
