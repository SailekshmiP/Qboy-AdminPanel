import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl, ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class EasydealService {
  BASEURL;
  apiUrl = "https://qboy.in/";
  constructor(private http: HttpClient) {
    this.apiUrl;

  }
  getcat() {
    console.log(this.apiUrl);

    return this.http.get(this.apiUrl + 'category');
  }
  addcategory(data) {
    return this.http.post(this.apiUrl + 'category/post', data);
  }
  editcategory(formData, cat_id) {
    return this.http.patch(this.apiUrl + 'category/edit/' + cat_id, formData);

  }

  changecategorystatus(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'category/edit/state/' + s, req);

  }
  getshop() {
    console.log(this.apiUrl);

    return this.http.get(this.apiUrl + 'shop');
  }
  addshop(formData) {
    return this.http.post(this.apiUrl + 'shop/post', formData);
  }
  editshop(formdata, id) {
    return this.http.patch(this.apiUrl + 'shop/edit/' + id, formdata);

  }
  editrestmenu(req, id) {
    return this.http.patch(this.apiUrl + 'menurest/edit/' + id, req);

  }
  getpreorerbyuserid(id){
    return this.http.get(this.apiUrl+'preorders/items/'+id);

  }
  confirmorder(req,id)
  {
    return this.http.patch(this.apiUrl+"preorders/status/"+id,req);
  }
  getshopdetailsbyorderid(d)
  {
    return this.http.get(this.apiUrl+"orders/shop/item/"+d);
  }
  getalldeliveryboy(){
    return this.http.get(this.apiUrl+'deliveryboy');

  }
  getorerbyuserid(s){
    return this.http.get(this.apiUrl+'orders/items/'+s);

  }
  assignorder(s,userid,easydeel)
  {
    return this.http.patch(this.apiUrl+'orders/delivery/'+userid+'/'+easydeel,s);
  }
  reject(s,uid,esdeelid){
    return this.http.patch(this.apiUrl+'orders/status/'+uid+'/'+esdeelid,s);
  }
  adddeliveryboy(req)
  {
    return this.http.post(this.apiUrl+"deliveryboy/signup",req)
  }
  getallusers()
  {
    return this.http.get(this.apiUrl+'users');
  }
  changestatusactive(e) {
    let req = {

    }

    return this.http.patch(this.apiUrl + 'shop/edit/state/' + e, req);
  }
  addrestmenuforapproval(req){
    return this.http.post(this.apiUrl + 'location_addrestaurent/post', req);

  }

  changerestaurantmenuactive(a) {
    let req = {

    }

    return this.http.patch(this.apiUrl + 'addrestaurantmenu/edit/state/' + a, req);
  }
  getalllocations() {

    return this.http.get(this.apiUrl + 'location');
  }
  getallgeneralmenubypagination(page)
  {
    return this.http.get(this.apiUrl + 'generalitem/pagination?page='+page);

  }
  addlocation(r) {
    return this.http.post(this.apiUrl + 'location/post', r);
  }

  addcourse(r) {
    return this.http.post(this.apiUrl + 'cource/post', r);
  }
  getallcoursetype() {
    return this.http.get(this.apiUrl + 'cource');

  }
  addrestmenu(r) {
    return this.http.post(this.apiUrl + 'menurest/post', r);

  }
  getallmenu() {
    return this.http.get(this.apiUrl + 'menurest/all');

  }


  getallmenubypagination(page)
  {
    return this.http.get(this.apiUrl + 'menurest?page='+page);

  }
  changestatusrestmenu(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'menurest/edit/state/' + s, req);

  }
  addrestmenusss(fomrdata) {
    return this.http.post(this.apiUrl + 'addrestaurantmenu/post', fomrdata);

  }
  editshopmenu(fomrdata, id) {

    return this.http.patch(this.apiUrl + 'addrestaurantmenu/edit/' + id, fomrdata);

  }
  getallmenus() {
    return this.http.get(this.apiUrl + 'addrestaurantmenu/info');

  }
  addgeneralitemmenu(s) {
    return this.http.post(this.apiUrl + 'generalitem/post', s);
  }
  addgencat(s) {
    return this.http.post(this.apiUrl + 'generalcategory/post', s);

  }
  getallgeneralcategory() {
    return this.http.get(this.apiUrl + 'generalcategory');

  }
  getallgeneralmenu() {
    return this.http.get(this.apiUrl + 'generalitem');
  }
  changestatus(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'generalitem/edit/state/' + s, req);
  }
  gencatstatchange(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'generalcategory/edit/state/' + s, req);
  }
  editgencat(req, id) {
    return this.http.patch(this.apiUrl + 'generalcategory/edit/' + id, req);
  }
  addgeneralshopmenu(a) {
    return this.http.post(this.apiUrl + 'generalshopmenu/post', a);
  }
  editgeneralmenu(s, id) {

    return this.http.patch(this.apiUrl + 'generalshopmenu/edit/' + id, s);
  }
  getallgeneralshopmenu() {
    return this.http.get(this.apiUrl + 'generalshopmenu/info');
  }
  changegmstatus(s) {
    let req = {

    }
    return this.http.patch(this.apiUrl + 'generalshopmenu/edit/state/' + s, req)
  }
  editgeneralitemmenu(req, id) {
    return this.http.patch(this.apiUrl + 'generalitem/edit/' + id, req);
  }

  editcourse(r, id) {
    return this.http.patch(this.apiUrl + 'cource/edit/' + id, r);


  }
  addoffer(formdata)
  {
    return this.http.post(this.apiUrl+'offers/post',formdata);
  }
  getalloffers()
  {
    return this.http.get(this.apiUrl+'offers');

  }
  editoffer(formData,id){

    return this.http.patch(this.apiUrl+'offers/edit/'+id,formData);

  }
  changeofferstatus(d)
  {
    let req= {

    }
    return this.http.patch(this.apiUrl+'offers/edit/state/'+d,req);

  }
  getalllocationbyshopid(s)
  {
    return this.http.get(this.apiUrl+'shop/location/'+s);
  }
  getallshopmappedtorestaurant()
  {
    return this.http.get(this.apiUrl+'shop/category/menutype/rest');
  }

  getshopsbygeneralcategory()
  {
    return this.http.get(this.apiUrl+'shop/category/menutype/general');
  }
  getallorder()
  {
    return this.http.get(this.apiUrl+'orders');
  }
  addmessages(req)
  {
    return this.http.post(this.apiUrl+'message/add',req)
  }
  getmessages()
  {

    return this.http.get(this.apiUrl+'message')
  }
  deleteChatMessage(s)
  {
    return this.http.delete(this.apiUrl+'message/'+s);
  }
  login(req){
    return this.http.post(this.apiUrl+"admin/login",req);
  }
  addadminphone(s)
  {
    return this.http.post(this.apiUrl+'master_phone/post',s);
  }
  getadminphone()
  {
    return this.http.get(this.apiUrl+'master_phone');
  }
  addwalletpoints(req) {
    return this.http.post(this.apiUrl + 'walletpoint/post',req);
  }
  updatewalletpoints(req,id)
  {
    return this.http.patch(this.apiUrl+'walletpoint/edit/'+id,req)
  }
  getwalletpoints() {
    return this.http.get(this.apiUrl + 'walletpoint');
  }
  updateadminphone(s, id) {
    return this.http.patch(this.apiUrl + 'master_phone/edit/' + id, s);

  }
  addlocationadmin(req) {
    return this.http.post(this.apiUrl + 'admin/signup', req);
  }
  getallupinumbers() {
    return this.http.get(this.apiUrl + 'upinumber');

  }
  addupinumber(req) {
    return this.http.post(this.apiUrl + 'upinumber/post', req);
  }
  updateupi(req, id) {
    return this.http.patch(this.apiUrl + 'upinumber/edit/' + id, req);
  }
  addlocationadminphone(req)
  {
    return this.http.post(this.apiUrl+'branch_phone/post',req);
  }
  getallphonenumbers()
  {
    return this.http.get(this.apiUrl+'branch_phone');
  }
  updatelocationadminphone(req,id)
{
  return this.http.patch(this.apiUrl+'branch_phone/edit/'+id,req);
}
}