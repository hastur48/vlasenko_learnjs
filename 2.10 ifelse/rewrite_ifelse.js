let message = (login == 'Сотрудник') ? 'Hi' :
    ((login == 'Директор') ? 'Good day' :
    ((login == '') ? 'Login not found' :
    ''));
