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
on "attribute_keys"."id" = "connect_categories_and_attribute_keys"."attribute_key_id"
