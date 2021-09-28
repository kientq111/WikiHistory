function creatEvent() {
    let $stageEvent = document.getElementsByClassName('stageEvent')[0];

    let $top = document.createElement('div');
    $top.style.display = 'flex';
    $top.style.paddingTop = '60px';

    let $inputImg = document.createElement('div');
    $inputImg.className = 'mt-1 col-sm-3 d-flex align-items-end form-control-file border ';

    let $input = document.createElement('input');
    $input.type = 'file';
    $input.className = '';

    let $inputForm = document.createElement('div');
    $inputForm.className = 'col-sm-9';

    let $title = document.createElement('p');
    $title.className = 'text-center h3';
    $title.innerHTML = 'Tạo giai đoạn sự kiện';

    let $div = document.createElement('div');

    let $groupName = document.createElement('div');
    $groupName.className = 'form-group';

    let $labelName = document.createElement('label');
    $labelName.innerHTML = 'Tên giai đoạn:';
    $labelName.htmlFor = 'usr';

    let $inputName = document.createElement('input');
    $inputName.type = 'text';
    $inputName.className = 'form-control';
    $inputName.id = 'usr';
    $inputName.required = true;
    $inputName.maxLength = 255;

    let $groupDateS = document.createElement('div');
    $groupDateS.className = 'form-group';

    let $labelDateS = document.createElement('label');
    $labelDateS.innerHTML = 'Ngày bắt đầu:';
    $labelDateS.htmlFor = 'pwd';

    let $inputDateS = document.createElement('input');
    $inputDateS.type = 'date';
    $inputDateS.className = 'form-control';
    $inputDateS.id = 'pwd';
    $inputDateS.required = true;

    let $groupDateE = document.createElement('div');
    $groupDateE.className = 'form-group';

    let $labelDateE = document.createElement('label');
    $labelDateE.innerHTML = 'Ngày kết thúc:';
    $labelDateE.htmlFor = 'pwd';

    let $inputDateE = document.createElement('input');
    $inputDateE.type = 'date';
    $inputDateE.className = 'form-control';
    $inputDateE.id = 'pwd';
    $inputDateE.required = true;


    let $depictForm = document.createElement('div');
    $depictForm.className = 'form-group text-white';
    $depictForm.style.display = 'flex';

    let $depictGroup = document.createElement('div');
    $depictGroup.className = 'col-sm-12';

    let $depictLabel = document.createElement('label');
    $depictLabel.htmlFor = 'comment';
    $depictLabel.innerHTML = 'Mô tả chi tiết:';

    let $depictText = document.createElement('textarea');
    $depictText.className = 'form-control';
    $depictText.rows = 5;
    $depictText.id = 'comment';
    $depictText.required = true;


    $inputImg.append($input);
    $groupName.append($labelName, $inputName);
    $groupDateS.append($labelDateS, $inputDateS);
    $groupDateE.append($labelDateE, $inputDateE);
    $div.append($groupName, $groupDateS, $groupDateE);
    $inputForm.append($title, $div);
    $top.append($inputImg, $inputForm);

    $depictGroup.append($depictLabel, $depictText);
    $depictForm.append($depictGroup);

    $stageEvent.append($top, $depictForm);
}