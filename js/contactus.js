var choose_file = document.getElementById("choose_file");        
        //console.log(choose_file);
        var file_input = document.getElementById("file_input");

        choose_file.addEventListener("click", function(){
            //alert("tt")
            file_input.click();
        });  //addEventListener對click做事件上綁定

        file_input.addEventListener("change", function(){
            //console.log(this.files[0].name);  //(this.files[0])表示我們所選的檔案 .name會印出檔名
            //console.log(this);
            var file_name = document.getElementById("file_name");
            file_name.innerHTML = this.files[0].name;

            //檔案預覽圖
            let reader = new FileReader();
            reader.readAsDataURL(this.files[0]);  //讀取檔案
            reader.addEventListener("load", function(){  //綁定事件
                //console.log(this.result); //base64

                let img_block = document.getElementById("img_block");
                //img_block.insertAdjacentHTML("beforeend", '<img src="' + this.result + '" class="small_width">');
                img_block.insertAdjacentHTML("beforeend", `<img src="${this.result}" class="small_width">`);
            });  
        });

