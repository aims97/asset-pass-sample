"use strict";(self.webpackChunkasset_pass_sample=self.webpackChunkasset_pass_sample||[]).push([[405],{9804:e=>{e.exports=JSON.parse('{"url":"redocusaurus\\\\AssetpassAlbumAPI.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.3","info":{"title":"AssetPass Album API","version":"1.0.0","description":"APIs for managing albums"},"paths":{"/api/actions/":{"get":{"operationId":"actions_list","tags":["actions"],"responses":{"200":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Action"}}}},"description":""}}},"post":{"operationId":"actions_create","tags":["actions"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ActionUpdate"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/ActionUpdate"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/ActionUpdate"}}}},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ActionUpdate"}}},"description":""}}}},"/api/actions/{id}/":{"get":{"operationId":"actions_retrieve","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this action.","required":true}],"tags":["actions"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Action"}}},"description":""}}},"put":{"operationId":"actions_update","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this action.","required":true}],"tags":["actions"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ActionUpdate"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/ActionUpdate"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/ActionUpdate"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ActionUpdate"}}},"description":""}}},"patch":{"operationId":"actions_partial_update","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this action.","required":true}],"tags":["actions"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PatchedAction"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/PatchedAction"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/PatchedAction"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Action"}}},"description":""}}},"delete":{"operationId":"actions_destroy","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this action.","required":true}],"tags":["actions"],"responses":{"204":{"description":"No response body"}}}},"/api/album-items/":{"get":{"operationId":"album_items_list","parameters":[{"in":"query","name":"album","schema":{"type":"string"},"description":"The album that the items belong to.","required":true}],"tags":["album-items"],"responses":{"200":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AlbumItem"}}}},"description":""}}},"post":{"operationId":"album_items_create","tags":["album-items"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateAlbumItem"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/CreateAlbumItem"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/CreateAlbumItem"}}},"required":true},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateAlbumItem"}}},"description":""}}}},"/api/album-items/{id}/":{"get":{"operationId":"album_items_retrieve","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album item.","required":true}],"tags":["album-items"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AlbumItem"}}},"description":""}}},"patch":{"operationId":"album_items_partial_update","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album item.","required":true}],"tags":["album-items"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PatchedAlbumItem"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/PatchedAlbumItem"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/PatchedAlbumItem"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AlbumItem"}}},"description":""}}},"delete":{"operationId":"album_items_destroy","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album item.","required":true}],"tags":["album-items"],"responses":{"204":{"description":"No response body"}}}},"/api/albums/":{"get":{"operationId":"albums_list","tags":["albums"],"responses":{"200":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Album"}}}},"description":""}}},"post":{"operationId":"albums_create","tags":["albums"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateAlbum"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/CreateAlbum"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/CreateAlbum"}}},"required":true},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateAlbum"}}},"description":""}}}},"/api/albums-admin/":{"get":{"operationId":"albums_admin_list","tags":["albums-admin"],"responses":{"200":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AlbumAdmin"}}}},"description":""}}}},"/api/albums-admin/{id}/":{"get":{"operationId":"albums_admin_retrieve","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album.","required":true}],"tags":["albums-admin"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AlbumAdmin"}}},"description":""}}}},"/api/albums/{id}/":{"get":{"operationId":"albums_retrieve","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album.","required":true}],"tags":["albums"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}}},"description":""}}},"patch":{"operationId":"albums_partial_update","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album.","required":true}],"tags":["albums"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PatchedAlbum"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/PatchedAlbum"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/PatchedAlbum"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}}},"description":""}}},"delete":{"operationId":"albums_destroy","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album.","required":true}],"tags":["albums"],"responses":{"204":{"description":"No response body"}}}},"/api/albums/{id}/approve_release/":{"post":{"operationId":"albums_approve_release_create","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album.","required":true}],"tags":["albums"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/Album"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/Album"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}}},"description":""}}}},"/api/albums/{id}/confirm_bank/":{"post":{"operationId":"albums_confirm_bank_create","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album.","required":true}],"tags":["albums"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/Album"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/Album"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}}},"description":""}}}},"/api/albums/{id}/deny_release/":{"post":{"operationId":"albums_deny_release_create","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album.","required":true}],"tags":["albums"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/Album"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/Album"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}}},"description":""}}}},"/api/albums/{id}/request_release/":{"post":{"operationId":"albums_request_release_create","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this album.","required":true}],"tags":["albums"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/Album"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/Album"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}}},"description":""}}}},"/api/albums/counts/":{"get":{"operationId":"albums_counts_retrieve","tags":["albums"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Album"}}},"description":""}}}},"/api/fcm-devices/":{"get":{"operationId":"fcm_devices_list","tags":["fcm-devices"],"responses":{"200":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/FCMDevice"}}}},"description":""}}},"post":{"operationId":"fcm_devices_create","tags":["fcm-devices"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FCMDevice"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/FCMDevice"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/FCMDevice"}}},"required":true},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FCMDevice"}}},"description":""}}}},"/api/fcm-devices/{registration_id}/":{"get":{"operationId":"fcm_devices_retrieve","parameters":[{"in":"path","name":"registration_id","schema":{"type":"string","title":"Registration token"},"required":true}],"tags":["fcm-devices"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FCMDevice"}}},"description":""}}},"patch":{"operationId":"fcm_devices_partial_update","parameters":[{"in":"path","name":"registration_id","schema":{"type":"string","title":"Registration token"},"required":true}],"tags":["fcm-devices"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PatchedFCMDevice"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/PatchedFCMDevice"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/PatchedFCMDevice"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FCMDevice"}}},"description":""}}}},"/api/log-entries/":{"get":{"operationId":"log_entries_list","tags":["log-entries"],"responses":{"200":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Entry"}}}},"description":""}}}},"/api/log-entries/{id}/":{"get":{"operationId":"log_entries_retrieve","parameters":[{"in":"path","name":"id","schema":{"type":"integer"},"description":"A unique integer value identifying this entry.","required":true}],"tags":["log-entries"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Entry"}}},"description":""}}}},"/api/memos/":{"get":{"operationId":"memos_list","parameters":[{"name":"page","required":false,"in":"query","description":"A page number within the paginated result set.","schema":{"type":"integer"}},{"name":"page_size","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"}}],"tags":["memos"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PaginatedMemoList"}}},"description":""}}},"post":{"operationId":"memos_create","tags":["memos"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Memo"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/Memo"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/Memo"}}},"required":true},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Memo"}}},"description":""}}}},"/api/memos/{id}/":{"get":{"operationId":"memos_retrieve","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this memo.","required":true}],"tags":["memos"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Memo"}}},"description":""}}},"put":{"operationId":"memos_update","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this memo.","required":true}],"tags":["memos"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Memo"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/Memo"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/Memo"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Memo"}}},"description":""}}},"patch":{"operationId":"memos_partial_update","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this memo.","required":true}],"tags":["memos"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PatchedMemo"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/PatchedMemo"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/PatchedMemo"}}}},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Memo"}}},"description":""}}},"delete":{"operationId":"memos_destroy","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this memo.","required":true}],"tags":["memos"],"responses":{"204":{"description":"No response body"}}}},"/api/memos/mark_all_read/":{"post":{"operationId":"memos_mark_all_read_create","tags":["memos"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Memo"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/Memo"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/Memo"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Memo"}}},"description":""}}}},"/api/recipients/":{"get":{"operationId":"recipients_list","parameters":[{"in":"query","name":"album","schema":{"type":"string"},"description":"The album that you need the recipients for.","required":true}],"tags":["recipients"],"responses":{"200":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RecipientRequest"}}}},"description":""}}},"post":{"operationId":"recipients_create","tags":["recipients"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateRecipientRequest"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/CreateRecipientRequest"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/CreateRecipientRequest"}}},"required":true},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateRecipientRequest"}}},"description":""}}}},"/api/recipients/{id}/":{"get":{"operationId":"recipients_retrieve","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this recipient request.","required":true}],"tags":["recipients"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}}},"description":""}}},"delete":{"operationId":"recipients_destroy","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this recipient request.","required":true}],"tags":["recipients"],"responses":{"204":{"description":"No response body"}}}},"/api/recipients/{id}/accept/":{"post":{"operationId":"recipients_accept_create","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this recipient request.","required":true}],"tags":["recipients"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}}},"description":""}}}},"/api/recipients/{id}/reject/":{"post":{"operationId":"recipients_reject_create","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this recipient request.","required":true}],"tags":["recipients"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RecipientRequest"}}},"description":""}}}},"/api/trustees/":{"get":{"operationId":"trustees_list","parameters":[{"in":"query","name":"album","schema":{"type":"string"},"description":"The album that you need the trustees for.","required":true}],"tags":["trustees"],"responses":{"200":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/TrusteeRequest"}}}},"description":""}}},"post":{"operationId":"trustees_create","tags":["trustees"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateTrusteeRequest"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/CreateTrusteeRequest"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/CreateTrusteeRequest"}}},"required":true},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateTrusteeRequest"}}},"description":""}}}},"/api/trustees/{id}/":{"get":{"operationId":"trustees_retrieve","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this trustee request.","required":true}],"tags":["trustees"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}}},"description":""}}},"delete":{"operationId":"trustees_destroy","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this trustee request.","required":true}],"tags":["trustees"],"responses":{"204":{"description":"No response body"}}}},"/api/trustees/{id}/accept/":{"post":{"operationId":"trustees_accept_create","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this trustee request.","required":true}],"tags":["trustees"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}}},"description":""}}}},"/api/trustees/{id}/reject/":{"post":{"operationId":"trustees_reject_create","parameters":[{"in":"path","name":"id","schema":{"type":"string","title":"UUID"},"description":"A unique value identifying this trustee request.","required":true}],"tags":["trustees"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}},"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}},"multipart/form-data":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TrusteeRequest"}}},"description":""}}}},"/api/users/":{"get":{"operationId":"users_list","parameters":[{"name":"page","required":false,"in":"query","description":"A page number within the paginated result set.","schema":{"type":"integer"}},{"name":"page_size","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"}}],"tags":["users"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PaginatedCustomUserList"}}},"description":""}}}},"/api/users/{username}/":{"get":{"operationId":"users_retrieve","parameters":[{"in":"path","name":"username","schema":{"type":"string","description":"Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."},"required":true}],"tags":["users"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CustomUser"}}},"description":""}}}},"/api/users/profile/":{"get":{"operationId":"users_profile_retrieve","tags":["users"],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CustomUser"}}},"description":""}}}}},"components":{"schemas":{"Action":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"title":{"type":"string","maxLength":400},"body":{"type":"string","maxLength":400},"req_type":{"type":"string","title":"Request Type","maxLength":50},"created":{"type":"string","format":"date-time","readOnly":true},"album":{"type":"string","title":"UUID","nullable":true}},"required":["created","id"]},"ActionUpdate":{"type":"object","properties":{"completed":{"type":"boolean"}}},"Album":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"status_read":{"type":"string","readOnly":true},"owner":{"type":"string","readOnly":true},"share_status":{"type":"string","readOnly":true},"action":{"type":"string","readOnly":true},"created":{"type":"string","format":"date-time","readOnly":true},"modified":{"type":"string","format":"date-time","readOnly":true},"name":{"type":"string","nullable":true,"maxLength":255},"thumbnail":{"type":"string","nullable":true,"title":"Thumbnail Base64"},"deadline":{"type":"string","format":"date-time","nullable":true,"title":"Deadline date"},"size":{"type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"format":"int64","title":"Size in bytes of all items banked"},"status":{"allOf":[{"$ref":"#/components/schemas/StatusD1bEnum"}],"minimum":0,"maximum":32767},"confirmed_date":{"type":"string","format":"date-time","nullable":true,"title":"First Confirmed date"},"release_date":{"type":"string","format":"date-time","nullable":true},"delete_date":{"type":"string","format":"date-time","nullable":true},"next":{"type":"string","format":"date-time","nullable":true},"counter":{"type":"integer","maximum":2147483647,"minimum":-2147483648}},"required":["action","created","id","modified","owner","share_status","status_read"]},"AlbumAdmin":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"status_read":{"type":"string","readOnly":true},"owner":{"type":"string","readOnly":true},"share_status":{"type":"string","readOnly":true},"items_count":{"type":"string","readOnly":true},"trustee_album_req":{"type":"array","items":{"$ref":"#/components/schemas/TrusteeRequestAdmin"}},"recipient_album_req":{"type":"array","items":{"$ref":"#/components/schemas/RecipientRequestAdmin"}},"created":{"type":"string","format":"date-time","readOnly":true},"modified":{"type":"string","format":"date-time","readOnly":true},"name":{"type":"string","nullable":true,"maxLength":255},"thumbnail":{"type":"string","nullable":true,"title":"Thumbnail Base64"},"deadline":{"type":"string","format":"date-time","nullable":true,"title":"Deadline date"},"size":{"type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"format":"int64","title":"Size in bytes of all items banked"},"status":{"allOf":[{"$ref":"#/components/schemas/StatusD1bEnum"}],"minimum":0,"maximum":32767},"confirmed_date":{"type":"string","format":"date-time","nullable":true,"title":"First Confirmed date"},"release_date":{"type":"string","format":"date-time","nullable":true},"delete_date":{"type":"string","format":"date-time","nullable":true},"next":{"type":"string","format":"date-time","nullable":true},"counter":{"type":"integer","maximum":2147483647,"minimum":-2147483648}},"required":["created","id","items_count","modified","owner","recipient_album_req","share_status","status_read","trustee_album_req"]},"AlbumItem":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"created":{"type":"string","format":"date-time","readOnly":true},"modified":{"type":"string","format":"date-time","readOnly":true},"name":{"type":"string","nullable":true,"maxLength":255},"iv":{"type":"string","nullable":true,"maxLength":200},"item_type":{"$ref":"#/components/schemas/ItemTypeEnum"},"extension":{"type":"string","maxLength":50},"checksum":{"type":"string","nullable":true,"title":"File checksum MD5","maxLength":255},"checksum_sha256":{"type":"string","nullable":true,"title":"File checksum SHA256","maxLength":255},"file":{"type":"string","format":"uri"}},"required":["created","file","id","item_type","modified"]},"AlbumNotif":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"owner":{"type":"string","readOnly":true},"status_read":{"type":"string","readOnly":true},"created":{"type":"string","format":"date-time","readOnly":true},"modified":{"type":"string","format":"date-time","readOnly":true},"name":{"type":"string","nullable":true,"maxLength":255},"status":{"allOf":[{"$ref":"#/components/schemas/StatusD1bEnum"}],"minimum":0,"maximum":32767}},"required":["created","id","modified","owner","status_read"]},"CreateAlbum":{"type":"object","properties":{"name":{"type":"string"}},"required":["name"]},"CreateAlbumItem":{"type":"object","properties":{"album":{"type":"string","title":"UUID"},"name":{"type":"string","nullable":true,"maxLength":255},"item_type":{"$ref":"#/components/schemas/ItemTypeEnum"},"checksum":{"type":"string","nullable":true,"title":"File checksum MD5","maxLength":255},"extension":{"type":"string","maxLength":50},"file":{"type":"string","format":"uri"},"iv":{"type":"string","nullable":true,"maxLength":200}},"required":["album","file","item_type"]},"CreateRecipientRequest":{"type":"object","properties":{"email":{"type":"string","format":"email"},"full_name":{"type":"string"},"album":{"type":"string","title":"UUID"}},"required":["album","email","full_name"]},"CreateTrusteeRequest":{"type":"object","properties":{"email":{"type":"string","format":"email"},"full_name":{"type":"string"},"album":{"type":"string","title":"UUID"}},"required":["album","email","full_name"]},"CustomUser":{"type":"object","properties":{"full_name":{"type":"string","title":"First name","maxLength":500},"mem_left":{"type":"string","readOnly":true},"status_read":{"type":"string","readOnly":true},"roles":{"type":"string","readOnly":true},"date_joined":{"type":"string","format":"date-time"},"country":{"type":"string","title":"SG","maxLength":2},"phone":{"type":"string","maxLength":100},"username":{"type":"string","description":"Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.","pattern":"^[\\\\w.@+-]+$","maxLength":150},"email":{"type":"string","format":"email","title":"Email address","maxLength":254}},"required":["mem_left","roles","status_read","username"]},"Entry":{"type":"object","properties":{"id":{"type":"integer","readOnly":true},"data":{"type":"object","additionalProperties":{}},"tags":{"type":"array","items":{"type":"string","title":"Tag","maxLength":100}},"message":{"type":"string"},"created":{"type":"string","format":"date-time","readOnly":true}},"required":["created","id","message"]},"FCMDevice":{"type":"object","properties":{"id":{"type":"integer","readOnly":true},"name":{"type":"string","nullable":true,"maxLength":255},"registration_id":{"type":"string","title":"Registration token"},"device_id":{"type":"string","nullable":true,"description":"Unique device identifier","maxLength":255},"active":{"type":"boolean","default":true,"title":"Is active","description":"Inactive devices will not be sent notifications"},"date_created":{"type":"string","format":"date-time","readOnly":true,"nullable":true,"title":"Creation date"},"type":{"$ref":"#/components/schemas/TypeEnum"}},"required":["date_created","id","registration_id","type"]},"ItemTypeEnum":{"enum":["mes","acc","med","doc","seed"],"type":"string","description":"* `mes` - Message\\n* `acc` - Digital Account\\n* `med` - Media\\n* `doc` - Document\\n* `seed` - Seed Phrase"},"Memo":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"req_type":{"type":"string"},"temp_req_type":{"type":"string"},"album":{"$ref":"#/components/schemas/AlbumNotif"},"modified":{"type":"string","format":"date-time","readOnly":true},"read":{"type":"boolean"},"data":{"type":"object","additionalProperties":{}},"message":{"type":"string"},"created":{"type":"string","format":"date-time","readOnly":true}},"required":["album","created","id","modified"]},"PaginatedCustomUserList":{"type":"object","properties":{"count":{"type":"integer","example":123},"next":{"type":"string","nullable":true,"format":"uri","example":"http://api.example.org/accounts/?page=4"},"previous":{"type":"string","nullable":true,"format":"uri","example":"http://api.example.org/accounts/?page=2"},"results":{"type":"array","items":{"$ref":"#/components/schemas/CustomUser"}}}},"PaginatedMemoList":{"type":"object","properties":{"count":{"type":"integer","example":123},"next":{"type":"string","nullable":true,"format":"uri","example":"http://api.example.org/accounts/?page=4"},"previous":{"type":"string","nullable":true,"format":"uri","example":"http://api.example.org/accounts/?page=2"},"results":{"type":"array","items":{"$ref":"#/components/schemas/Memo"}}}},"PatchedAction":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"title":{"type":"string","maxLength":400},"body":{"type":"string","maxLength":400},"req_type":{"type":"string","title":"Request Type","maxLength":50},"created":{"type":"string","format":"date-time","readOnly":true},"album":{"type":"string","title":"UUID","nullable":true}}},"PatchedAlbum":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"status_read":{"type":"string","readOnly":true},"owner":{"type":"string","readOnly":true},"share_status":{"type":"string","readOnly":true},"action":{"type":"string","readOnly":true},"created":{"type":"string","format":"date-time","readOnly":true},"modified":{"type":"string","format":"date-time","readOnly":true},"name":{"type":"string","nullable":true,"maxLength":255},"thumbnail":{"type":"string","nullable":true,"title":"Thumbnail Base64"},"deadline":{"type":"string","format":"date-time","nullable":true,"title":"Deadline date"},"size":{"type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"format":"int64","title":"Size in bytes of all items banked"},"status":{"allOf":[{"$ref":"#/components/schemas/StatusD1bEnum"}],"minimum":0,"maximum":32767},"confirmed_date":{"type":"string","format":"date-time","nullable":true,"title":"First Confirmed date"},"release_date":{"type":"string","format":"date-time","nullable":true},"delete_date":{"type":"string","format":"date-time","nullable":true},"next":{"type":"string","format":"date-time","nullable":true},"counter":{"type":"integer","maximum":2147483647,"minimum":-2147483648}}},"PatchedAlbumItem":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"created":{"type":"string","format":"date-time","readOnly":true},"modified":{"type":"string","format":"date-time","readOnly":true},"name":{"type":"string","nullable":true,"maxLength":255},"iv":{"type":"string","nullable":true,"maxLength":200},"item_type":{"$ref":"#/components/schemas/ItemTypeEnum"},"extension":{"type":"string","maxLength":50},"checksum":{"type":"string","nullable":true,"title":"File checksum MD5","maxLength":255},"checksum_sha256":{"type":"string","nullable":true,"title":"File checksum SHA256","maxLength":255},"file":{"type":"string","format":"uri"}}},"PatchedFCMDevice":{"type":"object","properties":{"id":{"type":"integer","readOnly":true},"name":{"type":"string","nullable":true,"maxLength":255},"registration_id":{"type":"string","title":"Registration token"},"device_id":{"type":"string","nullable":true,"description":"Unique device identifier","maxLength":255},"active":{"type":"boolean","default":true,"title":"Is active","description":"Inactive devices will not be sent notifications"},"date_created":{"type":"string","format":"date-time","readOnly":true,"nullable":true,"title":"Creation date"},"type":{"$ref":"#/components/schemas/TypeEnum"}}},"PatchedMemo":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"req_type":{"type":"string"},"temp_req_type":{"type":"string"},"album":{"$ref":"#/components/schemas/AlbumNotif"},"modified":{"type":"string","format":"date-time","readOnly":true},"read":{"type":"boolean"},"data":{"type":"object","additionalProperties":{}},"message":{"type":"string"},"created":{"type":"string","format":"date-time","readOnly":true}}},"RecipientRequest":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"full_name":{"type":"string","readOnly":true},"created":{"type":"string","format":"date-time","readOnly":true},"modified":{"type":"string","format":"date-time","readOnly":true},"status":{"allOf":[{"$ref":"#/components/schemas/Status86cEnum"}],"minimum":0,"maximum":32767},"email":{"type":"string","format":"email","maxLength":254},"next":{"type":"string","format":"date-time","nullable":true},"counter":{"type":"integer","maximum":2147483647,"minimum":-2147483648},"album":{"type":"string","title":"UUID"}},"required":["album","created","full_name","id","modified"]},"RecipientRequestAdmin":{"type":"object","properties":{"status_read":{"type":"string","readOnly":true},"user":{"type":"string","readOnly":true},"email":{"type":"string","format":"email","maxLength":254}},"required":["status_read","user"]},"Status86cEnum":{"enum":[0,1,2,3,4],"type":"integer","description":"* `0` - Pending\\n* `1` - Key Sending\\n* `2` - Key Sent\\n* `3` - Key Accepted\\n* `4` - Key Rejected"},"StatusD1bEnum":{"enum":[1,2,3,4],"type":"integer","description":"* `1` - Draft\\n* `2` - Stored for Future\\n* `3` - Pending Release\\n* `4` - Released"},"TrusteeRequest":{"type":"object","properties":{"id":{"type":"string","readOnly":true,"title":"UUID"},"full_name":{"type":"string","readOnly":true},"created":{"type":"string","format":"date-time","readOnly":true},"modified":{"type":"string","format":"date-time","readOnly":true},"status":{"allOf":[{"$ref":"#/components/schemas/Status86cEnum"}],"minimum":0,"maximum":32767},"email":{"type":"string","format":"email","maxLength":254},"next":{"type":"string","format":"date-time","nullable":true},"counter":{"type":"integer","maximum":2147483647,"minimum":-2147483648},"releasor":{"type":"boolean"},"user":{"type":"integer","nullable":true},"album":{"type":"string","title":"UUID"}},"required":["album","created","full_name","id","modified"]},"TrusteeRequestAdmin":{"type":"object","properties":{"status_read":{"type":"string","readOnly":true},"user":{"type":"string","readOnly":true},"email":{"type":"string","format":"email","maxLength":254}},"required":["status_read","user"]},"TypeEnum":{"enum":["ios","android","web"],"type":"string","description":"* `ios` - ios\\n* `android` - android\\n* `web` - web"}},"securitySchemes":{"oauth2":{"type":"oauth2","flows":{}}}}}}')}}]);