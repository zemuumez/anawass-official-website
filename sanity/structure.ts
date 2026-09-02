/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S: any) =>
  S.list()
    .title('ANAWASS Content Management')
    .items([
      // 1. Pages (Singleton / Page by Page)
      S.listItem()
        .title('📄 Pages (Section by Section)')
        .child(
          S.list()
            .title('Website Pages')
            .items([
              S.listItem()
                .title('🏠 Home Page')
                .child(
                  S.document()
                    .schemaType('pageHome')
                    .documentId('pageHome')
                    .title('Home Page (Bilingual Sections)')
                ),
              S.listItem()
                .title('ℹ️ About & Mission')
                .child(
                  S.document()
                    .schemaType('pageAbout')
                    .documentId('pageAbout')
                    .title('About & Mission (Bilingual Sections)')
                ),
              S.listItem()
                .title('📟 Smart Vending Access')
                .child(
                  S.document()
                    .schemaType('pageAccess')
                    .documentId('pageAccess')
                    .title('Smart Vending (Bilingual Sections)')
                ),
              S.listItem()
                .title('🩸 HIV Education Guide')
                .child(
                  S.document()
                    .schemaType('pageLearnHiv')
                    .documentId('pageLearnHiv')
                    .title('HIV Guide (Bilingual Sections)')
                ),
              S.listItem()
                .title('🔬 STI Education Guide')
                .child(
                  S.document()
                    .schemaType('pageLearnStis')
                    .documentId('pageLearnStis')
                    .title('STI Guide (Bilingual Sections)')
                ),
              S.listItem()
                .title('📍 Machine Locator Page')
                .child(
                  S.document()
                    .schemaType('pageLocations')
                    .documentId('pageLocations')
                    .title('Locations Page Content')
                ),
              S.listItem()
                .title('🔒 Privacy Commitments')
                .child(
                  S.document()
                    .schemaType('pagePrivacy')
                    .documentId('pagePrivacy')
                    .title('Privacy Page Content')
                ),
              S.listItem()
                .title('✉️ Contact Us Page')
                .child(
                  S.document()
                    .schemaType('pageContact')
                    .documentId('pageContact')
                    .title('Contact Us Page Content')
                ),
            ])
        ),

      S.divider(),

      // 2. Visual Lessons Carousels
      S.listItem()
        .title('🖼️ Visual Lessons (Carousels)')
        .schemaType('visualLesson')
        .child(
          S.list()
            .title('Visual Lessons by Topic')
            .items([
              S.listItem()
                .title('All Visual Lessons')
                .child(S.documentTypeList('visualLesson').title('All Lessons')),
              S.listItem()
                .title('🏠 Home Journey')
                .child(
                  S.documentList()
                    .title('Home Journey Slides')
                    .filter('_type == "visualLesson" && topic == "home"')
                ),
              S.listItem()
                .title('🩸 HIV Guide Visuals')
                .child(
                  S.documentList()
                    .title('HIV Visuals')
                    .filter('_type == "visualLesson" && topic == "hiv"')
                ),
              S.listItem()
                .title('🔬 STI Guide Visuals')
                .child(
                  S.documentList()
                    .title('STI Visuals')
                    .filter('_type == "visualLesson" && topic == "stis"')
                ),
              S.listItem()
                .title('📟 Smart Vending Walkthrough')
                .child(
                  S.documentList()
                    .title('Vending Walkthrough')
                    .filter('_type == "visualLesson" && topic == "access"')
                ),
              S.listItem()
                .title('🤝 Partnership in Action')
                .child(
                  S.documentList()
                    .title('Partnership Slides')
                    .filter('_type == "visualLesson" && topic == "partners"')
                ),
              S.listItem()
                .title('🔒 Privacy Explained')
                .child(
                  S.documentList()
                    .title('Privacy Slides')
                    .filter('_type == "visualLesson" && topic == "privacy"')
                ),
              S.listItem()
                .title('🇪🇹 Amharic Dedicated Visuals')
                .child(
                  S.documentList()
                    .title('Amharic Slides')
                    .filter('_type == "visualLesson" && topic == "am"')
                ),
            ])
        ),

      // 3. Machine Locations
      S.listItem()
        .title('📍 Machine Locations')
        .schemaType('locationItem')
        .child(S.documentTypeList('locationItem').title('Vending Machine Locations')),

      S.divider(),

      // 4. Contact Form Submissions (Inbox)
      S.listItem()
        .title('📬 Contact Messages Inbox')
        .schemaType('contactMessage')
        .child(
          S.list()
            .title('Messages Inbox')
            .items([
              S.listItem()
                .title('🟢 New / Unread Messages')
                .child(
                  S.documentList()
                    .title('New Messages')
                    .filter('_type == "contactMessage" && status == "new"')
                ),
              S.listItem()
                .title('🟡 In Progress')
                .child(
                  S.documentList()
                    .title('In Progress')
                    .filter('_type == "contactMessage" && status == "in_progress"')
                ),
              S.listItem()
                .title('🔵 Replied')
                .child(
                  S.documentList()
                    .title('Replied')
                    .filter('_type == "contactMessage" && status == "replied"')
                ),
              S.listItem()
                .title('📁 All Messages')
                .child(S.documentTypeList('contactMessage').title('All Messages Received')),
            ])
        ),

      S.divider(),

      // 5. Global Settings
      S.listItem()
        .title('⚙️ Global Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Global Announcements & Footer Settings')
        ),
    ]);
