# Generated by Django 3.0.3 on 2020-02-24 14:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shopApp', '0004_orderproductlist'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='orderproductlist',
            old_name='order_id',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='orderproductlist',
            old_name='product_id',
            new_name='product',
        ),
    ]
