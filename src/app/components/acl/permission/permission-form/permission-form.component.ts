import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Permission, PermissionService } from '../../../../services/acl/permission.service';
import { Role, RoleService } from '../../../../services/acl/role.service';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.css']
})
export class PermissionFormComponent implements OnInit {

  private permissionForm: FormGroup;
  private editMode: boolean = false;
  private roleList:any=[{}];
  private permission: Permission = {
    _id: "",
    name: "",
    description: "",
    slug: "",
    created_date: ""
  };

  get name() { return this.permissionForm.get('name'); }
  get description() { return this.permissionForm.get('description'); }
  get slug() { return this.permissionForm.get('slug'); }
  get roles() { return this.permissionForm.get('roles'); }

  constructor(private permissionService: PermissionService, private roleService: RoleService,public route: ActivatedRoute) {
    this.permissionForm = new FormGroup({
      'name': new FormControl(this.permission.name, [Validators.required]),
      'description': new FormControl(this.permission.description, [Validators.required]),
      'slug': new FormControl(this.permission.slug, [Validators.required]),
      'roles':new FormControl([],[Validators.required])
    });
    if (route) {
      this.route.params.subscribe(this.onParamGet.bind(this));
    }
  }

  onParamGet(params) {
    if (params['slug']) {
      this.permissionService.getPermission(params['slug']).subscribe(permission => {
        this.setForm(permission);
        this.editMode = true;
      });
    } else {
      this.setForm(this.permission);
    }
  }


  setForm(permission: Permission) {

    this.permissionForm.setValue({
      "name": permission.name,
      "description": permission.description,
      "slug": permission.slug,
      "roles":[],
    })
  }

  addPermission() {
    if (this.permissionForm.valid) {
      this.permissionService.addPermission(this.permissionForm.value).subscribe(response => {
        console.log(response)
      });
    }
  }

  ngOnInit() {
    this.roleService.getAllRoles().subscribe((roles) => {
      this.roleList = roles;
    });
  }

}
