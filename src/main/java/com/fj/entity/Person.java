package com.fj.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Person {

	@Id
	@GeneratedValue
	private long id;

	@Column
	private Date gmtCreate;

	@Column
	private Date gmtModify;

	@Column
	private String name;

	public Person() {
		name = "";
		gmtCreate = new Date();
		gmtModify = new Date();
	}

	public Person(String name) {
		this.name = name;
		gmtCreate = new Date();
		gmtModify = new Date();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getGmtCreate() {
		return gmtCreate;
	}

	public void setGmtCreate(Date gmtCreate) {
		this.gmtCreate = gmtCreate;
	}

	public Date getGmtModify() {
		return gmtModify;
	}

	public void setGmtModify(Date gmtModify) {
		this.gmtModify = gmtModify;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
