let index = 0;

function createStage() {
    let $container = document.querySelector('.stageEvent');
    let $stageContainer = document.createElement('div');
    $stageContainer.className = 'stageContainer';
    $stageContainer.innerHTML = `

                        <div style="padding-top: 60px;">
                            <!-- Ảnh -->
                            <p class="text-center h3">Tạo giai đoạn nhân vật</p>
                            <div class="mt-1  d-flex align-items-end form-control-file border previewStageImage" style="height: 300px;">
                                <input type="text" placeholder="Nhập URL ảnh" class="stageImage" style="width: 315px;" onchange="previewStageImage(this.value,this)">
                            </div>
                            <!-- Thông tin -->
                            <div class=" ">
                                <div class="form-group ">
                                    <label for="pwd ">Ngày bắt đầu:</label>
                                    <input type="text" class="form-control stageStartDate" required>
                                </div>
                                <div class="form-group text-white">
                                    <label for="comment">Mô tả chi tiết:</label>
                                    <textarea class="form-control stageDetail" rows="5" required></textarea> 
                                </div>
                            </div>
                        </div>`
    $container.appendChild($stageContainer);
}

async function saveCharacter() {
    let data = {
        name: document.getElementById('eventName').value,
        title: document.getElementById('title').value,
        birth: document.getElementById('startDate').value,
        death: document.getElementById('endDate').value,
        home: document.getElementById('location').value,
        general: document.getElementById('general').value,
        picture: document.getElementById('eventImage').value,
        details: []
    };

    let $stageContainers = document.getElementsByClassName('stageContainer');

    for (let $stageContainer of $stageContainers) {
        let detail = {
            description: $stageContainer.querySelector('.stageDetail').value,
            date: $stageContainer.querySelector('.stageStartDate').value,
            picture: $stageContainer.querySelector('.stageImage').value,
        }
        data.details.push(detail);
    }
    console.log(data);
    await db.collection('characters').add(data);
    window.location.reload();
    alert('Tạo nhân vật lịch sử thành công!');
    location.href = "./ListHero_admin.html";
}

function previewEventImage(value) {
    let $imagePreview = document.getElementById('imagePreview');
    $imagePreview.style.backgroundImage = 'url(' + value + ')';
    $imagePreview.style.backgroundSize = 'cover';
}

function previewStageImage(value, input) {
    console.log(input.parentElement);
    let $imagePreview = input.parentElement;
    $imagePreview.style.backgroundImage = 'url(' + value + ')';
    $imagePreview.style.backgroundSize = 'cover';
}


function checkType() {
    // document.getElementById('btnSave').disabled = false;
    let eventName = document.getElementById('eventName').value;
    let title = document.getElementById('title').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let location = document.getElementById('location').value;
    let general = document.getElementById('general').value;
    let eventImage = document.getElementById('eventImage').value;
    if (eventName.length != 0 && startDate.length != 0 && endDate.length != 0 && location.length != 0 && general.length != 0 && title.length != 0 && eventImage.length != 0) {
        document.getElementById('btnSave').disabled = false;
    } else {
        document.getElementById('btnSave').disabled = true;
    }

}