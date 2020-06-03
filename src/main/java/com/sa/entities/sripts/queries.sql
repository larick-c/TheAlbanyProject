select
u.user_id,
u.first_name,
u.last_name,
u_s.string_id,
s_a.description,
s_a.total,
g.total
from strings_attached.user_profile u
	inner join strings_attached.user_strings u_s on u.user_id = u_s.id_user
	inner join strings_attached.string_attached s_a on u_s.string_id = s_a.id
	inner join strings_attached.string_group s_g on s_a.id = s_g.string_id
	inner join strings_attached.group g on s_g.group_id = g.id

