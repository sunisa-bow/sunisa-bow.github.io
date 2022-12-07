
    var apiParameter  = '';
    var eventID       = 4; 
    //var apiURLrequest = "http://203.144.137.46/PreregisterAPI/PreRegisterAPI.ashx?" 
    var apiURLrequest = "https://secure2.playpark.com/PreRegisterAPI/PreRegisterAPI.ashx?" 

    $("form").submit(function (event) {
        
      $(".form-control").removeClass("is-invalid");
      $(".form-check-input").removeClass("is-invalid");
      $(".form-select").removeClass("is-invalid");
      $(".iti--allow-dropdown").removeClass("is-invalid");
        
        
       event.preventDefault();

 const phoneNumber = phoneInput.getNumber();
 const phoneNumber2 = phoneInput.getSelectedCountryData();
        
      apiParameter = '' 
      var dupStatus = 0; 
      var formValues = $(this).serializeArray()
      console.log(formValues);
      
      event.preventDefault();
      $('.submit').addClass('disabled');    
      
      apiParameter = apiParameter + 'EventID=' + eventID; 
		
      jQuery.each(formValues, function (weq, inputValue) {
        apiParameter = apiParameter + '&' + inputValue.name + '=' + inputValue.value;
        //console.log(apiParameter);
          
        if(inputValue.value == ''){ 
            $("." + inputValue.name).addClass("is-invalid");
            $("." + inputValue.name + "~ .invalid-feedback").html('คุณยังไม่ได้กรอก/เลือกข้อมูลในช่องนี้');
            $('.submit').removeClass('disabled');
            dupStatus++;
            return false; 
        }
      });
        
      apiParameter = apiParameter + '&FreeText5=' + phoneNumber + '&FreeText6=' + phoneNumber2.iso2 + '&FreeText7=' + phoneNumber2.dialCode;
      //console.log(phoneNumber[0]='%2b');  
      console.log(apiParameter);  
        
      
      if(dupStatus == 0){
         sendRequest();
      }
    });

    function sendRequest() {

      const url = apiURLrequest + apiParameter; 
      var headers = {}
      console.log(url);
      fetch(url, {
          method: "POST",
          mode: 'cors',
          headers: headers,
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.error)
          }
          return response.json();
        })
        .then(data => {
          let x = data.code;
          findErrorStatus(x) 
          if (x == 9) { 
            showInputError(data) 
          }
          if (x == 0){
            $('.form-control').val('');
            $('.form-check-input').prop('checked', false); 
              
          }
          $('.submit').removeClass('disabled');
        })
        .catch(function (error) {
          console.log(data);
        });
    }

    function findErrorStatus(p) {
      $.each(requestStatus.error, function (i, v) {
        if (v.code == p) {
          Swal.fire({
            icon: v.status,
            title: v.title,
            text: v.massage,
          })
          return;
        }
      });
    }

    var requestStatus = {
      "error": [{
          'code': '0',
          'massage': 'ระบบได้บันทึกข้อมูลของคุณเรียบร้อย',
          'status': 'success',
          'title': 'ลงทะเบียนสำเร็จ'
        }, {
          'code': '1',
          'massage': 'ไม่พบกิจกรรม หรือ ไม่อยู่ในช่วงเวลากิจกรรม หรือ กิจกรรมปิดอยู่',
          'status': 'error',
          'title': 'เกิดข้อผิดพลาด'
        },
         /*{
            'code': '2',
            'massage': 'Code : 2 - พบข้อมูลซ้ำในระบบกิจกรรม (กรณีเลือกตรวจสอบข้อความซ้ำ)',
            'status': 'error',
            'title': 'เกิดข้อผิดพลาด'
          }, {
            'code': '3',
            'massage': 'Code : 3 - เกิดข้อผิดพลาดในการลงทะเบียน (ติดต่อ mis เพื่อขอข้อมูลเพิ่มเติม)',
            'status': 'error',
            'title': 'เกิดข้อผิดพลาด'
          }, {
            'code': '4',
            'massage': 'Code : 4 - ไม่พบ freetext ที่ตั้งไว้ หรือ ถูกปิดการใช้งานอยู่ (จัดการได้ที่หน้า Manage Group)',
            'status': 'error',
            'title': 'เกิดข้อผิดพลาด'
          }, {
            'code': '9',
            'massage': 'Code : 9 - ข้อมูลที่กรอกเข้ามาไม่ถูกต้อง ตรวจสอบที่ ตัวแปร Result อีกครั้ง',
            'status': 'error',
            'title': 'เกิดข้อผิดพลาด'
          }, {
            'code': '99',
            'massage': 'Code : 99 - Error อื่นๆ (ติดต่อ mis เพื่อขอข้อมูลเพิ่มเติม)',
            'status': 'error',
            'title': 'เกิดข้อผิดพลาด'
          }*/
      ]
    }

    function showInputError(data) {
      var json = data.result[0]; 
      jQuery.each(json, function (i, val) { 
        if (val !== "0" && val !== null) { 
          $("." + i).addClass("is-invalid"); 
          $("." + i + "~ .invalid-feedback").html(validationError(val)); 
          return false; 
        }
      });
    }

    function validationError(errorCode) {
      let validationErrorMassage = {
        "0" : "Code : 0  - ข้อมูลถูกต้อง",
        "1" : "Code : 1  - ไม่พบตัวแปร",
        "2" : "Code : 2  - ข้อมูลประเภท อีเมล เป็นค่าว่าง",
        "3" : "Code : 3  - ข้อมูลประเภท อีเมล ไม่ถูกต้อง",
        "4" : "Code : 4  - ข้อมูลประเภท เบอร์โทรศัพทร์ เป็นค่าว่าง",
        "5" : "Code : 5  - ข้อมูลประเภท เบอร์โทรศัพทร์ ไม่ถูกต้อง",
        "6" : "Code : 6  - ข้อมูลประเภท ตัวเลข เป็นค่าว่าง",
        "7" : "Code : 7  - ข้อมูลประเภท ตัวเลข ไม่ถูกต้อง",
        "8" : "Code : 8  - ข้อมูลประเภท ตัวอักษร เป็นค่าว่าง",
        "9" : "Code : 9  - ข้อมูลประเภท ตัวอักษร ไม่ถูกต้อง",
        "10": "Code : 10 - ข้อมูลประเภท อีเมล ซ้ำในระบบ",
        "11": "Code : 11 - ข้อมูลประเภท เบอร์โทรศัพทร์ ซ้ำในระบบ",
        "12": "Code : 12 - ข้อมูลประเภท ตัวเลข ซ้ำในระบบ",
        "13": "Code : 13 - ข้อมูลประเภท ตัวอักษร ซ้ำในระบบ"
      };
      return (validationErrorMassage[errorCode]);
    }
