select *
from "attribute_values"
inner join "connect_attribute_key_and_attribute_value"
on "attribute_values"."id" = "connect_attribute_key_and_attribute_value"."attribute_values_id"
inner join "attribute_keys"
on "attribute_keys"."id" = "connect_attribute_key_and_attribute_value"."attribute_key_id"
;

select *
from "categories"
right join "connect_categories_and_attribute_keys"
on "categories"."id" = "connect_categories_and_attribute_keys"."category_id"
;

select *
from "categories"
right join "connect_categories_and_attribute_keys"
on "categories"."id" = "connect_categories_and_attribute_keys"."category_id"
right join "attribute_keys"
on "attribute_keys"."id" = "connect_categories_and_attribute_keys"."attribute_key_id" where "category_id" = 26
knex.select('*').from('categories')
.rightJoin('connect_categories_and_attribute_keys',
  'categories.id', 'connect_categories_and_attribute_keys.category_id')
.rightJoin('attribute_keys',
  'attribute_keys.id', "connect_categories_and_attribute_keys.attribute_key_id")
.where('category_id', 26)


select *
from "attribute_keys"
inner join "connect_attribute_key_and_attribute_value"
on "attribute_keys"."id" = "connect_attribute_key_and_attribute_value"."attribute_key_id"
inner join "attribute_values"
on "attribute_values"."id" = "connect_attribute_key_and_attribute_value"."attribute_values_id"
;
