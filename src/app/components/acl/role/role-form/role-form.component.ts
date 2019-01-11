import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Role, RoleService } from '../../../../services/acl/role.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  private roleForm: FormGroup;
  private editMode: boolean = false;
  private role: Role = {
    _id: "",
    name: "",
    description: "",
    slug: "",
    users: [],
    permissions: [],
    created_date: ""
  };

  get name() { return this.roleForm.get('name'); }
  get description() { return this.roleForm.get('description'); }
  get slug() { return this.roleForm.get('slug'); }

  constructor(private roleService: RoleService, public route: ActivatedRoute) {
    this.roleForm = new FormGroup({
      'name': new FormControl(this.role.name, [Validators.required]),
      'description': new FormControl(this.role.description, [Validators.required]),
      'slug': new FormControl(this.role.slug, [Validators.required])
    });
    if (route) {
      this.route.params.subscribe(this.onParamGet.bind(this));
    }
  }

  onParamGet(params) {
    if (params['slug']) {
      this.roleService.getRole(params['slug']).subscribe(role => {
        this.setForm(role);
        this.editMode = true;
      });
    } else {
      this.setForm(this.role);
    }
  }

  setForm(role: Role) {
    this.roleForm.setValue({
      "name": role.name,
      "description": role.description,
      "slug": role.slug
    })
  }

  ngOnInit() { }
  addRole() {
    if (this.roleForm.valid) {
      this.roleService.addRole(this.roleForm.value).subscribe(response => {
        console.log(response)
      });
    }
  }

}
