## res.send("")
서버가 정상적으로 불러져오면 서버에 출력

## req.body.email
적은 이메일 불러오기

## <%= 치환할 값 %>
ejs 문법  
치환할 값에 해당하는 값이 출력됨

## res.render('email.ejs', {'email' : req.body.email})
email.ejs에서 email이란 네임값을 찾아서 req.body.email 값으로 치환해서 브라우저에 응답
