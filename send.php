if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $name = $_GET["name"];
  $phone = $_GET["phone"];
  $message = $_GET["message"];

  $to = "vladram3707@gmail.com";
  $subject = "Запрос с сайта";
  $body = "Имя: $name\nНомер телефона: $phone\nЗапрос: $message";

  if (mail($to, $subject, $body)) {
    echo "<p>Сообщение отправлено!</p>";
  } else {
    echo "<p>Ошибка отправки сообщения.</p>";
  }
}
