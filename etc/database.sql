Table products{
id int(5)
product_name varchar(32)
product_discrption text
produc_quantity int(4)
product_model varchar(12)
product_cover varchar(64)
product_url varchar(255)
product_price decimal(8,2)
product_date_added varchar(8)
product_viewed int(5)
product_weight decimal(5,2)
product_status tinyint(1)
product_tax_class_id int(5)
manufacturer_id int(5)
sales_manager_id int(5)
heart int(5)
star int(5)
sale_status boolean
discount_rate int(5)
discount_price int(5)
shipping_free boolean
}
Ref: products.manufacturer_id > manufacturers.id
Ref: products.product_tax_class_id > tax_classes.id
Ref: products.sales_manager_id > sales_managers.id


// ***
Table products_attributes{
id int(5)
product_id int(5)
products_option_id int(5)
products_options_value_id int(5)
}
Ref: products_attributes.product_id > products.id
Ref: products_attributes.products_option_id > products_options.id
Ref: products_attributes.products_options_value_id > products_options_values.id

Table products_options{
id int(5) PK
products_options_name varchar(32)
}

Table products_options_values{
id int(5) PK
products_options_values_name varchar(64)
}

// *** 表[products_options テーブル]に記録された商品オプションと、表[products_options_values テーブル]に記録された商品オプション値の対応関係を記録します。
Table products_options_values_to_products_options{
id int(5) PK
products_option_id int(5)
products_options_value_id int(5)
}
Ref: products_options_values_to_products_options.products_option_id > products_options.id
Ref: products_options_values_to_products_options.products_options_value_id > products_options_values.id

// *******メーカー ******* //
Table manufacturers{
id int(5) PK
manufacturers_name varchar(32)
manufacturers_image varchar(64)
}

Table tax_classes{
id int(5) PK
tax_class_title varchar(32)
tax_class_description varchar(255)
last_modified timestamp(14)
date_added timestamp(14)
}
// ********セールスマネージャーズ******* //
Table sales_managers{
id int(5) PK
seller_class_id varchar(32)
shop_id int(5)
}
Ref:sales_managers.seller_class_id > seller_classes.id
Ref:sales_managers.shop_id - shops.id

Table seller_classes{
id int(5) PK
class_name varchar(64)
}

Table shops{
id int(5)
user_id int(5)
shop_name varchar(32)
shop_description text
shop_cover varchar(64)
shop_avatar varchar(64)
shop_youtube_url varchar(255)
shop_address varchar(64)
}
Ref:shops.user_id > users.id

Table product_images{
id int(5) PK
product_id int(5)
image varchar(64)
}
Ref: product_images.product_id > products.id

Table users{
id int(5)
username varchar(64)
email varchar(96)
password_digest varchar(40)
shop_name varchar(32)
sex varchar(32)
birthday varchar(8)
avatar varchar(64)
creditcard_number_digest varchar(32)
creditcard_security_digest varchar(20)
creditcard_type_digest varchar(20)
creditcard_y varchar(4)
creditcard_m varchar(4)
creditcard_d varchar(4)
creditcard_owner varchar(64)
address varchar(64)
}

Table categories{
id int(5) PK
category_name varchar(32)
category_image varchar(64)
parent_id int(5)
sort_order int(3)
}

Table products_to_categories{
id int(5) PK
product_id int(5)
categories_id int(5)
}
Ref:products_to_categories.product_id > products.id
Ref:products_to_categories.categories_id > categories.id

Table classifications{
id int(5) PK
Classification_name varchar(32)
}

Table products_classifications{
id int(5) PK
product_id int(5)
classification_id int(5)
classification_values_name varchar(64)
options_values_price decimal(8,2)
price_prefix char(1)
sku_code varchar(32)
}
Ref: products_classifications.product_id > products.id
Ref: products_classifications.classification_id > classifications.id

Table products_with_categories_to_products_options_to_products_options_values{
id int(5) PK
categories_id int(5)
products_option_id int(5)
products_options_value_id int(5)
}

Ref: products_with_categories_to_products_options_to_products_options_values.categories_id > categories.id
Ref: products_with_categories_to_products_options_to_products_options_values.products_option_id > products_options.id
Ref: products_with_categories_to_products_options_to_products_options_values.products_options_value_id > products_options_values.id
