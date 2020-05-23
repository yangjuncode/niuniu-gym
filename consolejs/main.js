let coursename = document.querySelector('p.courseName').textContent
console.log('coursename=', coursename)

let allCourseItems = document.querySelectorAll('div.courseItem')

let videoPlayer = document.querySelector('#player > div > div.pv-video-wrap > video')

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

async function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  let result = []
  for (var i = 0; i < allCourseItems.length; i++) {
    let elImgPoster = allCourseItems[i].querySelector('div > div.itemCenter > div > img')
    let cnTitle = allCourseItems[i].querySelector('div > div.itemRTit > p').textContent
    let enTitle = allCourseItems[i].querySelector('div.itemRight > p').textContent
    let iStr = '' + (i + 1)
    if (iStr.length < 2) {
      iStr = '0' + iStr
    }
    //console.log(iStr, cnTitle, enTitle)

    enTitle = replaceAll(enTitle, " ", "")
    enTitle = replaceAll(enTitle, "'", "")
    let filename = coursename + iStr + replaceAll(cnTitle, " ", "") +
      enTitle + ".mp4"

    elImgPoster.click()

    await sleep(5000)

    result.push("axel -o " + filename + " " + videoPlayer.src)
    console.log("axel -o ", filename, videoPlayer.src)
  }
  let r = ''
  for (let i = 0; i < result.length; i++) {
    r += result[i] + "\r\n"
  }
  console.log(r)
}

run();