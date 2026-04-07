import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с формы записи на почту владельца платформы."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    smtp_user = 'nikita.u07@mail.ru'
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'nikita.u07@mail.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с FitOnline — {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
      <h2 style="background: #000; color: #fff; padding: 20px; margin: 0;">
        Новая заявка FitOnline
      </h2>
      <div style="padding: 24px; border: 1px solid #eee;">
        <p style="margin: 0 0 12px;"><strong>Имя:</strong> {name}</p>
        <p style="margin: 0 0 12px;"><strong>Телефон:</strong> {phone}</p>
      </div>
      <p style="color: #999; font-size: 12px; padding: 0 24px;">
        Заявка получена с лендинга FitOnline
      </p>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
