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
                                <input type="text" class="stageImage" style="width: 315px;" onchange="previewStageImage(this.value,this)">
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
        deadth: document.getElementById('endDate').value,
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