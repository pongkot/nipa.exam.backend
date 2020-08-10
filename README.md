**ข้อจำกัดของ application**
-  การ import csv ไฟล์ หัว column ต้องเป็นไปตามที่ app กำหนดเท่านั้นและข้อมูลในแต่ละ column จะต้องไม่มี comma ไม่อย่างนั้นการ insert ข้อมูลจะเพี้ยน
-  ขาด UI ในการอัพโหลด csv ไฟล์
-  security ที่เกี่ยวกับ cors ที่ยัง allow ให้ใครก็ได้เข้าถึงได้
-  ขาด validator ในการ validate ข้อมูลในฟิลด์ของ csv file ที่ import เข้าไปใน app
