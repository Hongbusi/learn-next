'use client';
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'

export default function Login() {
  const [isRemember, setIsRemember] = useState(true)

  return (
    <main className="overflow-hidden relative flex flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <img src="/images/beams-cover.jpg" className="absolute left-1/2 top-0 -ml-[47.5rem] w-[122.5rem] max-w-none" />
      <div className="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%" patternTransform="translate(0 -1)">
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bg)"></rect>
        </svg>
      </div>

      <div className="relative flex flex-1 flex-col justify-center items-center pt-12 pb-36">
        <div className="mx-auto mb-12 w-auto h-6 text-2xl text-slate-900">Adminify</div>
        <Form name="validateOnly" className="w-full max-w-sm" layout="vertical" size="large" autoComplete="off">
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input placeholder="请输入账号" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <div className="flex justify-between items-center mb-6">
            <Checkbox checked={isRemember}>记住我</Checkbox>
            <a>忘记密码</a>
          </div>
          <Form.Item>
            <Button type="primary" size="large" block>登录</Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}
