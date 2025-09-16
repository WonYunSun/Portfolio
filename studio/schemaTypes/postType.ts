import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'projects',
  title: 'projects',
  type: 'document',
  fields: [
    // 프로젝트명
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    //로고이미지
    defineField({name: 'logo', title: 'Project Logo', type: 'image'}),
    //깃허브
    defineField({
      name: 'githubUrl',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    //서비스링크
    defineField({
      name: 'serviceUrl',
      type: 'slug',
      options: {source: 'title'},
    }),
    //팀원
    defineField({
      name: 'team',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    //사용기술
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            allowCustom: true,
            list: [
              {title: 'React', value: 'react'},
              {title: 'Next.js', value: 'nextjs'},
              {title: 'JavaScript', value: 'Javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'Tailwind CSS', value: 'tailwind'},
              {title: 'styled-components', value: 'styled-components'},
              {title: 'react-responsive', value: 'react-responsive'},
              {title: 'Supabase', value: 'supabase'},
              {title: 'Zustand', value: 'zustand'},
              {title: 'redux', value: 'redux'},
              {title: 'Tanstack Query', value: 'Tanstack Query'},
            ],
          },
        },
      ],

      validation: (rule) => rule.required().min(1),
    }),
    //프로젝트기간
    defineField({
      name: 'projectPeriod',
      title: 'Project Period',
      type: 'object',
      fields: [
        {
          name: 'startDate',
          title: 'Start Date',
          type: 'date',
          validation: (rule) => rule.required(),
        },
        {
          name: 'endDate',
          title: 'End Date',
          type: 'date',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    // 프로젝트 이미지 (배열)
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // 이미지 크롭 기능
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: '이미지 설명 (접근성)',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: '이미지 캡션 (선택사항)',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1).max(10),
    }),

    // 프로젝트 소개
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().min(10).max(500),
      description: '프로젝트에 대한 간단한 소개 (2-3줄)',
    }),

    // 프로젝트 기여
    defineField({
      name: 'contributions',
      title: 'My Contributions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Contribution Title',
              type: 'string',
              validation: (rule) => rule.required(),
              placeholder: '예: 공통 UI 컴포넌트 구현',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}],
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'content',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),

    // 트러블슈팅
    defineField({
      name: 'troubleshooting',
      title: 'Troubleshooting',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'problem',
              title: 'Problem',
              type: 'string',
              validation: (rule) => rule.required(),
              placeholder: '예: 타임피커 라이브러리 호환성 문제',
            },
            {
              name: 'solution',
              title: 'Solution',
              type: 'array',
              of: [{type: 'block'}],
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'problem',
              subtitle: 'solution',
            },
          },
        },
      ],
      description: '프로젝트에서 겪은 기술적 문제와 해결 과정',
    }),
  ],
})
