let count = 1;
function createCharacter() {
    count++;
    console.log(count);
    let $form = document.getElementsByClassName('form')[0];

    let $order = document.createElement('h3');
    $order.className = 'ml-4';
    $order.innerHTML = 'Nhân vật' +' '+ count;

    let $table = document.createElement('table');
    $table.className = 'table table-borderless row no-gutters';

    let $tbody = document.createElement('tbody');
    $tbody.className = 'text-white';

    //Tên nhân vật
    let $trName = document.createElement('tr');

    let $tdName = document.createElement('td');
    $tdName.style.width = '20%';
    $tdName.innerHTML = 'Tên nhân vật';

    let $tdInputName = document.createElement('td');

    let $inputName = document.createElement('input');
    $inputName.type = 'text';
    $inputName.id = 'name';
    $inputName.placeholder = 'Điền tên tại đây';
    $inputName.required = true;
    $inputName.maxLength = 255;
    $inputName.className = 'form-control';

    //Ảnh nhân vật
    let $trImage = document.createElement('tr');

    let $tdImage = document.createElement('td');
    $tdImage.innerHTML = 'Ảnh nhân vật';

    let $tdInputImage = document.createElement('td');

    let $inputImage = document.createElement('input');
    $inputImage.required = true;
    $inputImage.type = 'file';
    $inputImage.id = 'image';

    //Chức danh nghề nghiệp
    let $trJob = document.createElement('tr');

    let $tdJob = document.createElement('td');
    $tdJob.innerHTML = 'Chức danh';

    let $tdInputJob = document.createElement('td');

    let $inputJob = document.createElement('input');
    $inputJob.type = 'text';
    $inputJob.id = 'title';
    $inputJob.required = true;
    $inputJob.maxLength = 255;
    $inputJob.className = 'form-control';

    //Ngày sinh
    let $trBirth = document.createElement('tr');

    let $tdBirth = document.createElement('td');
    $tdBirth.innerHTML = 'Ngày sinh';

    let $tdInputBirth = document.createElement('td');

    let $inputBirth = document.createElement('input');
    $inputBirth.type = 'date';
    $inputBirth.id = 'birth';
    $inputBirth.className = 'form-control';

    //Ngày mất
    let $trDeath = document.createElement('tr');

    let $tdDeath = document.createElement('td');
    $tdDeath.innerHTML = 'Ngày mất';

    let $tdInputDeath = document.createElement('td');

    let $inputDeath = document.createElement('input');
    $inputDeath.type = 'date';
    $inputDeath.id = 'death';
    $inputDeath.className = 'form-control';

    //Quê quán
    let $trCountry = document.createElement('tr');

    let $tdCountry = document.createElement('td');
    $tdCountry.innerHTML = 'Quê quán';

    let $tdInputCountry = document.createElement('td');

    let $inputCountry = document.createElement('input');
    $inputCountry.type = 'text';
    $inputCountry.id = 'adress';
    $inputCountry.required = true;
    $inputCountry.maxLength = 255;
    $inputCountry.className = 'form-control'

    //Khái quát
    let $trGeneral = document.createElement('tr');

    let $tdGeneral = document.createElement('td');
    $tdGeneral.innerHTML = 'Khái quát nhân vật';

    let $tdInputGeneral = document.createElement('td');

    let $inputGeneral = document.createElement('textarea');
    $inputGeneral.id = 'general';
    $inputGeneral.rows = 10;
    $inputGeneral.required = true;
    $inputGeneral.maxLength = 255;
    $inputGeneral.className = 'form-control'

    // Mô tả chi tiết
    let $trDetails = document.createElement('tr');

    let $tdDetails = document.createElement('td');
    $tdDetails.innerHTML = 'Mô tả chi tiết nhân vật';

    let $tdInputDetails = document.createElement('td');

    let $inputDetails = document.createElement('textarea');
    $inputDetails.id = 'general';
    $inputDetails.rows = 10;
    $inputDetails.required = true;
    $inputDetails.className = 'form-control'



    $tdInputName.append($inputName);
    $trName.append($tdName, $tdInputName);

    $tdInputImage.append($inputImage);
    $trImage.append($tdImage, $tdInputImage);


    $tdInputJob.append($inputJob);
    $trJob.append($tdJob, $tdInputJob);

    $tdInputBirth.append($inputBirth);
    $trBirth.append($tdBirth, $tdInputBirth);

    $tdInputDeath.append($inputDeath);
    $trDeath.append($tdDeath, $tdInputDeath);

    $tdInputCountry.append($inputCountry);
    $trCountry.append($tdCountry, $tdInputCountry);

    $tdInputGeneral.append($inputGeneral);
    $trGeneral.append($tdGeneral, $tdInputGeneral);

    $tdInputDetails.append($inputDetails);
    $trDetails.append($tdDetails, $tdInputDetails);

    $tbody.append($trName, $trImage, $trJob, $trBirth, $trDeath, $trCountry, $trGeneral, $trDetails);
    $table.append($tbody);
    $form.append($order ,$table);

    console.log($form);
}




